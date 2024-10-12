import { FC } from 'react';

import css from './ImageCard.module.css';
import { ModalInterface } from '../types';

interface ImageCardProps {
  src: string;
  alt: string;
  openModal: (image: ModalInterface) => void;
}

const ImageCard: FC<ImageCardProps> = ({ src, alt, openModal }) => {
  return (
    <div className={css.card}>
      <img src={src} alt={alt} onClick={() => openModal({ src, alt })} />
    </div>
  );
};

export default ImageCard;