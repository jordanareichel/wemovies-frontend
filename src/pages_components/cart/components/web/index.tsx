import React, { useEffect, useState } from 'react';

import { CartItens } from '@api/models/Cart';
import {
  createOrUpdateCart,
  deleteAll,
  deleteItem,
  getCart,
} from '@api/service/Cart';
import { createOrUpdatePayment } from '@api/service/Payment';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Image } from '@components/Image';
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';
import { Text } from '@components/Text';
import currency from '@utils/currency';
import router from 'next/router';

import {
  Wrapper,
  Body,
  View,
  Column,
  Row,
  Divider,
  Submit,
  Total,
  RowItens,
  ImageItens,
  ButtonMinusStyled,
  ButtonPlusStyled,
  InputButton,
  ButtonTrash,
  ItensEnd,
  Head,
  Empty,
  ImageEmpty,
  Action,
} from './styles';

export enum ModalTypeEnum {
  'error' = 'ERROR',
  'delete' = 'DELETE',
  'confirm' = 'CONFIRM',
  'close' = 'CLOSE',
}

export default function Web() {
  const [counter, setCounter] = useState<number>(0);
  const [cartItens, setCartItens] = useState<CartItens[]>([]);
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [modalType, setModalType] = useState<ModalTypeEnum>(
    ModalTypeEnum.close,
  );

  useEffect(() => {
    getItemCart();
  }, [counter]);

  function handleClose() {
    setModalType(ModalTypeEnum.close);
  }

  async function getItemCart() {
    try {
      setLoading(true);
      const results = await getCart();
      setCartItens(results.data.cart);
      setCounter(results.data.cart.length);
    } catch (err) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Não foi possível atender sua solicitação! Tente novamente.',
      );
    } finally {
      setLoading(false);
    }
  }

  function handleRemoveItem(code: string) {
    setModalType(ModalTypeEnum.delete);
    setModalMessage('Tem certeza que deseja remover este item?');
    setCode(code);
  }

  async function handleConfirmDelete() {
    try {
      setLoading(true);
      const result = await deleteItem({ code });
      setCartItens(prevItems => prevItems.filter(item => item.code !== code));
      setCounter(result.length);
      setModalType(ModalTypeEnum.close);
    } catch (err) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Não foi possível atender sua solicitação! Tente novamente.',
      );
    } finally {
      setLoading(false);
    }
  }

  async function changeUnits(newValue: number, index: number) {
    try {
      cartItens[index].quantidade = newValue;
      setCartItens([...cartItens]);
      await createOrUpdateCart({
        title: cartItens[index].title,
        image: cartItens[index].image,
        code: cartItens[index].code,
        value: `${cartItens[index].value}`,
        quantidade: newValue,
        subTotal: `${cartItens[index].value * newValue}`,
        total: `${cartItens[index].value * newValue}`,
      });
    } catch (err) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Não foi possível atender sua solicitação! Tente novamente.',
      );
    }
  }

  function getTotal(total: any, item: any) {
    return Number(total + item.value * item.quantidade);
  }

  function finishPayment() {
    setModalType(ModalTypeEnum.confirm);
    setModalMessage('Deseja finalizar seu pedido?');
  }

  async function handleFinishPurchase() {
    try {
      setLoading(true);
      await createOrUpdatePayment({
        value: `${currency(cartItens.reduce(getTotal, 0))}`,
      });

      await deleteAll();
      setModalType(ModalTypeEnum.close);
      router.push('/confirm');
    } catch (err) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Não foi possível atender sua solicitação! Tente novamente.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <Header title={'WeMovie'} counter={counter} />
      <Modal
        visible={modalType !== ModalTypeEnum.close}
        title="Atenção!"
        loading={loading}
        actions={[
          {
            color: '#EE4629',
            variant: 'ghost',
            label: 'Cancelar',
            onClick: () => setModalType(ModalTypeEnum.close),
          },
          {
            label: 'Confirmar',
            color: '#129E57',
            variant: 'ghost',
            onClick:
              modalType === ModalTypeEnum.delete
                ? handleConfirmDelete
                : modalType === ModalTypeEnum.confirm
                ? handleFinishPurchase
                : handleClose,
          },
        ]}>
        <Text align="left" color="#2F2E41" size={14} weight="bold">
          {modalMessage}
        </Text>
      </Modal>
      <Body>
        {!cartItens.length ? (
          !loading ? (
            <View color="#ffffff" radius={4}>
              <Empty>
                <Text color="#2F2E41" align="center" size={20} weight="bold">
                  Parece que não há nada por aqui :(
                </Text>
                <ImageEmpty src={require('@assets/png/empty.png')} alt={''} />
                <Divider width={447} height={2} empty />
                <Action>
                  <Button
                    block
                    shape="bordered"
                    variant="contained"
                    onClick={() => router.push('/')}
                    color={'#009EDD'}
                    fontColor="white">
                    <Text
                      align="center"
                      size={14}
                      color={'white'}
                      weight="bold">
                      VOLTAR
                    </Text>
                  </Button>
                </Action>
              </Empty>
            </View>
          ) : (
            <></>
          )
        ) : (
          <View color="white" radius={4}>
            <Row>
              <Head>
                <Text color="#999999" align="left" size={14} weight="bold">
                  PRODUTO
                </Text>
                <Text color="#999999" align="left" size={14} weight="bold">
                  QTD
                </Text>
                <Text color="#999999" align="left" size={14} weight="bold">
                  SUBTOTAL
                </Text>
              </Head>
            </Row>
            {cartItens.map((item, index) => (
              <Column key={index}>
                <RowItens>
                  <ImageItens>
                    <Image
                      src={item.image}
                      width={89}
                      height={114}
                      alt="Image"
                    />
                    <div>
                      <Text
                        align="left"
                        color="#2F2E41"
                        size={14}
                        weight="bold">
                        {item.title}
                      </Text>
                      <Text
                        align="left"
                        color="#2F2E41"
                        size={16}
                        weight="bold">
                        {currency(item.value)}
                      </Text>
                    </div>
                  </ImageItens>
                  <InputButton>
                    <ButtonMinusStyled
                      onClick={() => changeUnits(item.quantidade - 1, index)}
                    />
                    <Input
                      key={index}
                      value={item.quantidade}
                      width={'64'}
                      color="#D9D9D9"
                    />
                    <ButtonPlusStyled
                      onClick={() => changeUnits(item.quantidade + 1, index)}
                    />
                  </InputButton>
                  <ItensEnd>
                    <Text align="right" color="#2F2E41" size={16} weight="bold">
                      {currency(item.value * item.quantidade)}
                    </Text>
                    <div>
                      <ButtonTrash
                        onClick={() => handleRemoveItem(item.code)}
                      />
                    </div>
                  </ItensEnd>
                </RowItens>
              </Column>
            ))}
            <Divider />
            <Row>
              <Submit
                shape="bordered"
                variant="contained"
                onClick={() => finishPayment()}
                color={'#009EDD'}
                fontColor="#FFFFFF">
                <Text color="#FFFFFF" align="left" size={14} weight="bold">
                  FINALIZAR PEDIDO
                </Text>
              </Submit>
              <div>
                <Total color="#999999" align="left" size={14} weight="bold">
                  TOTAL
                </Total>
                <Text color="#2F2E41" size={24} weight="bold">
                  {currency(cartItens.reduce(getTotal, 0))}
                </Text>
              </div>
            </Row>
          </View>
        )}
      </Body>
    </Wrapper>
  );
}
