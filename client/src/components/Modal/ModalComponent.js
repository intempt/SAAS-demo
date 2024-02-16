import React, {useContext} from 'react';
import ModalContext from "../../utils/modalContext";
import styled from 'styled-components';
import ModalHeader from "@components/Modal/ModalHeader";
import ModalBody from "@components/Modal/ModalBody";
import ModalFooter from "@components/Modal/ModalFooter";
import useIntemptOptimization from "../../hooks/useIntemptOptimization";

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #030A194D;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    max-width: 650px;
    min-width: 400px;
    width: 100%;
    margin: 1rem;
    top: 0;
    left: 0;
    border-radius: 16px;
    border: 1px solid #E8E9ED;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF),
    linear-gradient(0deg, #E8E9ED, #E8E9ED);

    * {
        box-sizing: border-box;
    }
`;

const ModalComponent = () => {
  // Intempt popups
  useIntemptOptimization();

  const {modalState, RemoveModal} = useContext(ModalContext);
  const {
    open,
    closeOnBackdrop,
    title,
    body,
    footer
  } = modalState

  const onClose = () => {
    RemoveModal()
  }

  const onBackdrop = () => {
    closeOnBackdrop && RemoveModal()
  }

  return (
    <>
      {open && (
        <ModalBackdrop onClick={onBackdrop}>
          <ModalContent>
            <ModalHeader onClose={onClose} title={title}/>
            <ModalBody contentConfig={body}/>
            <ModalFooter contentConfig={footer}/>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default ModalComponent;