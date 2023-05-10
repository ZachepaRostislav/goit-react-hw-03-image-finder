import React from 'react';
import { ItemImg, ListItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  id,
  previewImg,
  tags,
  toggleModal,
}) {
  return (
    <>
      <ListItem className="gallery-item" key={id} onClick={toggleModal}>
        <ItemImg src={previewImg} alt={tags} />
      </ListItem>
    </>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  previewImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
