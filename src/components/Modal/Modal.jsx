import React from 'react';
import { Overlay, Window, ModalImg } from './Modal.styled';

export default function Modal() {
  return (
    <Overlay>
      <Window>
        <ModalImg src="" alt="" />
      </Window>
    </Overlay>
  );
}
