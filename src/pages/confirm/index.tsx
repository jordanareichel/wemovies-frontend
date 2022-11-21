import React, { useEffect, useState } from 'react';

import { getCart } from '@api/service/Cart';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { Text } from '@components/Text';
import { useRouter } from 'next/router';

import {
  Wrapper,
  Body,
  View,
  Message,
  ImageConfirm,
  Action,
} from '../../pages_components/confirm/styles';

export default function Confirm() {
  const router = useRouter();
  const [counter, setCounter] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getItemCart();
  }, []);

  async function getItemCart() {
    try {
      setLoading(true);
      const results = await getCart();
      setCounter(results.data.cart.length);
    } catch (err) {
      setOpenModal(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <Header title={'WeMovies'} counter={counter} />
      <Modal
        title="Atenção"
        visible={openModal}
        loading={loading}
        actions={[
          {
            color: '#EE4629',
            variant: 'ghost',
            label: 'Cancelar',
            onClick: () => setOpenModal(false),
          },
          {
            label: 'Confirmar',
            color: '#129E57',
            variant: 'ghost',
            onClick: () => setOpenModal(false),
          },
        ]}>
        <Text color="#2F2E41" align="left" size={16} weight="bold">
          Não foi possível atender sua solicitação nesse momento! Tente
          novamente.
        </Text>
      </Modal>
      <Body>
        <View radius={4} color="white" height={574}>
          <Message>
            <Text align="center" size={20} color={'#2F2E41'} weight="bold">
              Compra realizada com sucesso!
            </Text>
            <ImageConfirm
              src={require('@assets/png/confirm.png')}
              alt="Confirm image"
              width={294}
              height={307}
            />
            <Action>
              <Button
                block
                shape="bordered"
                variant="contained"
                onClick={() => router.push('/')}
                color={'#009EDD'}
                fontColor="white">
                <Text align="center" size={14} color={'white'} weight="bold">
                  VOLTAR
                </Text>
              </Button>
            </Action>
          </Message>
        </View>
      </Body>
    </Wrapper>
  );
}
