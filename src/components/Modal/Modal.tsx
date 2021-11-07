import React, { FC, ReactChildren } from 'react';
import Modal from 'react-modal';
import { ModalContent, ModalWrapper } from './Modal.styles';

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'transparent';

type EditMovieProps = {
  isOpen: boolean;
  closeModal(): void;
  children: ReactChildren;
}

export const ModalCustom: FC<EditMovieProps> = ({
  isOpen,
  children: content,
  closeModal,
}: EditMovieProps) => {
  console.log('ModalCustom', isOpen)
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentElement={(props, children) => (
          <>
            <ModalWrapper />
            <ModalContent {...props}>{children}</ModalContent>
          </>
        )}
      >
        {content}
      </Modal>
    </>
  )
};
