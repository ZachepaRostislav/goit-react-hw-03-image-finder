import React, { Component } from 'react';
import { Overlay, Window, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
