import React from 'react';
import { Btn } from './Button.styled';

export default function Button({ nextImages }) {
  return (
    <>
      <Btn type="button" onClick={nextImages}>
        Load More
      </Btn>
    </>
  );
}
