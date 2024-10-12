import Modal from 'react-modal';
import { FC } from 'react';

import css from './ImageModal.module.css';

interface ImageModalProps {
  src: string;
  alt: string;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <img src={src} alt={alt} className={css.img} />
    </Modal>
  );
};

export default ImageModal;