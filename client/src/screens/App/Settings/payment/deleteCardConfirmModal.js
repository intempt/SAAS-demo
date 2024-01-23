import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

import DangerButton from '../../../../components/Common/buttons/DangerButton';
import CancelButton from '../../../../components/Common/buttons/CancelButton';
import AddCard from '../../../../../public/addcardsc'
import Head from 'next/head'
const ButtonWrapper = styled(DangerButton)`
  margin-right: 3rem;
`;

const ModalCardDelete = ({ isModalCard, handleModalCardCancel, deletePaymentMethod }) => {
  return (
    <>
    <Head>
      <script src='https://app.staging.intempt.com/ev/js/ev.min.js'></script>
      <script src='https://cdn.staging.intempt.com/intempt.min.js'></script>
    </Head>
    <AddCard></AddCard>
    <Modal
      visible={isModalCard}
      title="Removing Card"
      onCancel={handleModalCardCancel}
      footer={[
        <ButtonWrapper onClick={deletePaymentMethod}>Remove</ButtonWrapper>,
        <CancelButton onClick={handleModalCardCancel}>Cancel</CancelButton>
      ]}
    >
      Are You sure you want to remove Card?
    </Modal>
    </>
  );
};

export default ModalCardDelete;
