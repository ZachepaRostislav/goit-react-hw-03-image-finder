import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default function ImageGallery({ hits, toggleModal }) {
  return (
    <>
      <List className="gallery">
        {hits.map(hit => (
          <ImageGalleryItem
            key={hit.webformatURL}
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

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      pageURL: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      previewURL: PropTypes.string.isRequired,
      previewWidth: PropTypes.number.isRequired,
      previewHeight: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      webformatWidth: PropTypes.number.isRequired,
      webformatHeight: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      imageWidth: PropTypes.number.isRequired,
      imageHeight: PropTypes.number.isRequired,
      imageSize: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      collections: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      userImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
