import React from 'react';
import { ItemImg, ListItem } from './ImageGalleryItem.styled';

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
