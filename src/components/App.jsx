import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { requestImages } from 'services/api';
import { ToastContainer } from 'react-toastify';
export default class App extends Component {
  state = {
    imageName: '',
    hits: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    selectedImage: null,
    alt: null,
    totalImages: 0,
  };

  componentDidUpdate(_, prevState) {
    const { imageName, page } = this.state;
    if (prevState.imageName !== imageName || prevState.page !== page) {
      this.fetchImages();
    }
  }
  fetchImages = () => {
    const { imageName, page } = this.state;
    this.setState({ isLoading: true });
    requestImages(imageName, page)
      .then(data => {
        const newHits = data.hits;
        if (newHits.length === 0) {
          return;
        }
        this.setState(prevState => ({
          hits: [...prevState.hits, ...newHits],
          totalImages: data.totalHits,
        }));
      })
      .catch(error => {
        this.setState({ error });
        console.error('Error:', error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName, hits: [], page: 1, totalImages: 0 });
  };

  incrementPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  toggleModal = (largeImage, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: largeImage,
      alt,
    }));
  };

  render() {
    const { hits, isLoading, showModal, selectedImage, alt, totalImages } =
      this.state;
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          hits={hits}
          isLoading={isLoading}
          toggleModal={this.toggleModal}
        />

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={selectedImage}
            alt={alt}
          />
        )}

        {isLoading && <Loader />}
        {!isLoading && totalImages !== hits.length && (
          <Button loadMore={this.incrementPage} />
        )}
      </>
    );
  }
}
