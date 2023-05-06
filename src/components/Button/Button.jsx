import React from 'react';

export default function Button({ nextImages }) {
  return (
    <>
      <button type="button" onClick={nextImages}>
        Load More
      </button>
    </>
  );
}
