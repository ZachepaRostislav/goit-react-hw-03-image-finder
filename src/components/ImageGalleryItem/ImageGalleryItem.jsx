import React from 'react';

export default function ImageGalleryItem({ id, url, tags }) {
  return (
    <>
      <li className="gallery-item" key={id}>
        <img src={url} alt={tags} />
      </li>
    </>
  );
}
