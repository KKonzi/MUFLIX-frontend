import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.16);
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 90%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
  z-index: 100;
  
  padding: 20px;
`;

const CloseButton = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  cursor: pointer;
`

const MovieModal = ({isOpen,close}) => {
  console.log(isOpen)

  return (
    <div>
      {
        isOpen ?
          <ModalWrapper>
            <ModalOverlay/>
            <ModalContainer>
              <CloseButton onClick={close}/>
            </ModalContainer>
          </ModalWrapper>
        : null
      }
    </div>
  );
};

export default MovieModal;

