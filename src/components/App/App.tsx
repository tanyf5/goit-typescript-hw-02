import { useEffect, useState } from 'react';

import { getImages } from '../apiService/images';
import { ImageInterface, DataInterface, ModalInterface } from '../types';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<ImageInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMes, setErrorMes] = useState<string>('');
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalInterface>({
    src: '',
    alt: '',
  });

  useEffect(() => {
    if (!query) return;
    setLoader(true);
    const fetchData = async () => {
      try {
        const { results, total, total_pages } = await getImages(query, page);
        if (total === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevState => [...prevState, ...results]);
        setLoadMore(page < total_pages);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMes(error.message);
        }
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [query, page]);

  const onSubmit = (text: string): void => {
    setImages([]);
    setQuery(text);
    setPage(1);
    setLoadMore(false);
    setIsEmpty(false);
    setErrorMes('');
  };

  const onLoadMore = (): void => {
    setPage(prevState => prevState + 1);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setModalImage({
      src: '',
      alt: '',
    });
  };

  const openModal = (image: ModalInterface): void => {
    setModalIsOpen(true);
    setModalImage(image);
  };
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isEmpty && (
        <p style={{ textAlign: 'center', marginTop: 10 }}>
          We can not find photos 🔎
        </p>
      )}
      {loadMore && <LoadMoreBtn onClick={onLoadMore} />}
      {errorMes && <ErrorMessage errorMes={errorMes} />}
      {loader && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
    </>
  );
}