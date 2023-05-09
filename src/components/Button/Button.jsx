import React from 'react';
import { Btn } from './Button.styled';

export default function Button({ loadMore }) {
  return (
    <>
      <Btn type="button" onClick={loadMore}>
        Load More
      </Btn>
    </>
  );
}
