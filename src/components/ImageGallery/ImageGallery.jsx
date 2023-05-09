import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export default function ImageGallery({ hits, toggleModal }) {
  return (
    <>
      <List className="gallery">
        {hits.map(hit => (
          <ImageGalleryItem
            key={hit.id}
            id={hit.id}
            previewImg={hit.webformatURL}
            tags={hit.tags}
            toggleModal={() => toggleModal(hit.largeImageURL, hit.tags)}
          />
        ))}
      </List>
    </>
  );
}
