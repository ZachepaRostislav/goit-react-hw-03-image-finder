import React, { Component } from 'react';
import { Overlay, Window, ModalImg } from './Modal.styled';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImage, alt } = this.props;
    return (
      <>
        <Overlay className="overlay" onClick={this.handleBackdropClick}>
          <Window className="modal">
            <ModalImg src={largeImage} alt={alt} />
          </Window>
        </Overlay>
      </>
    );
  }
}
