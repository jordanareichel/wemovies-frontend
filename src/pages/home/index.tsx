import React, { useEffect, useState } from 'react';

import { Products } from '@api/models/Products';
import { createOrUpdateCart, getCart } from '@api/service/Cart';
import { getProducts } from '@api/service/Products';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { Modal } from '@components/Modal';
import { Text } from '@components/Text';
import router from 'next/router';

import { Wrapper, Body } from '../../pages_components/home/styles';

export enum ModalTypeEnum {
  'error' = 'ERROR',
  'confirm' = 'CONFIRM',
  'close' = 'CLOSE',
}

export default function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [modalType, setModalType] = useState<ModalTypeEnum>(
    ModalTypeEnum.close,
  );
  const [modalMessage, setModalMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getListProducts();
  }, []);

  useEffect(() => {
    getItemCart();
  }, [counter]);

  function handleClose() {
    setModalType(ModalTypeEnum.close);
  }

  async function getListProducts() {
    try {
      setLoading(true);
      const results = await getProducts();
      setProducts(results.data.product);
    } catch (err) {
      setLoading(false);
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Não foi possível atender sua solicitação! Tente novamente.',
      );
    } finally {
      setLoading(false);
    }
  }

  async function getItemCart() {
    try {
      const results = await getCart();
      setCounter(results.data.cart.length);
    } catch (err) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Não foi possível atender sua solicitação! Tente novamente.',
      );
    }
  }

  async function handleAddCart(item: Products, index: any) {
    try {
      products[index].color = '#039B00';
      products[index].amount = 1;
      setProducts([...products]);

      const results = await createOrUpdateCart({
        title: item.title,
        value: `${item.value}`,
        code: item.code,
        image: item.image,
        quantidade: 1,
        subTotal: `${item.value * 1}`,
        total: `${item.value * 1}`,
      });
      setCounter(results.length);
      setModalType(ModalTypeEnum.confirm);
      setModalMessage('Deseja prosseguir para o carrinho?');
    } catch (err) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Não foi possível atender sua solicitação! Tente novamente.',
      );
    }
  }

  return (
    <Wrapper>
      <Header title={'WeMovies'} counter={counter} />
      <Modal
        visible={modalType !== ModalTypeEnum.close}
        loading={loading}
        title="Atenção!"
        actions={[
          {
            color: '#EE4629',
            variant: 'ghost',
            label: 'Continuar comprando',
            onClick: () => handleClose(),
          },
          {
            label: 'Confirmar',
            color: '#129E57',
            variant: 'ghost',
            onClick: () => router.push('/cart'),
          },
        ]}>
        <Text color="#2F2E41" align="left" size={16} weight="bold">
          {modalMessage}
        </Text>
      </Modal>
      <Body>
        {!products.length
          ? loading && <Loader type="spin" />
          : products.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                value={item.value}
                image={item.image}
                onSubmit={() => handleAddCart({ ...item }, index)}
                counter={item.amount}
                titleButton={
                  item.color ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'
                }
                colorButton={item.color ? item.color : '#009EDD'}
              />
            ))}
      </Body>
    </Wrapper>
  );
}
