import React from 'react';
import { ListItem, ItemImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ id, previewImg, tags }) {
  return (
    <>
      <ListItem key={id}>
        <ItemImg src={previewImg} alt={tags} />
      </ListItem>
    </>
  );
}
