import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';
export default function Button({ loadMore }) {
  return (
    <>
      <Btn type="button" onClick={loadMore}>
        Load More
      </Btn>
    </>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
