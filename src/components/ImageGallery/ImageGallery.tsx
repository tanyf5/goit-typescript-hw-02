import { FC } from 'react';

import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageInterface, ModalInterface } from '../types';

interface ImageGalleryProps {
  images: ImageInterface[];
  openModal: (image: ModalInterface) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(img => {
        return (
          <li key={img.id} className={css.item}>
            <ImageCard
              src={img.urls.regular}
              alt={img.alt_description}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;