import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import Modal from 'components/Modal';
export class App extends Component {
  state = {
    imageName: '',
  };
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        {/* <Modal /> */}
      </>
    );
  }
}
