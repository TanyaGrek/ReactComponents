import React from 'react';
import { Button } from 'components/Button/Button';
import { ModalCustom } from 'components/Modal/Modal';
import { ModalContent, ModalTitle, XButton } from './RemoveMovie.styles';

export const RemoveMovie = ({
  isOpen,
  cancel,
  submit
}) => (
  <ModalCustom isOpen={isOpen} closeModal={cancel}>
    <XButton onClick={cancel}>X</XButton>
    <ModalTitle>ADD MOVIE</ModalTitle>
    <ModalContent>Are you sure you want to delete this movie?</ModalContent>
    <Button type='full' title='Confirm' size='s' onClick={submit} />
  </ModalCustom>
)
