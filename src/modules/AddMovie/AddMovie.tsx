import React, { useState } from 'react';
import { Button } from 'components';
import { MovieForm } from '../MovieForm/MovieForm';
import { AddMovieTitle } from './AddMovie.styles';
import { ModalCustom } from '../../components/Modal/Modal';

export const AddMovie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button size="s" type="blurred" title="+ Add movie" onClick={toggleModal} />
      <ModalCustom isOpen={isOpen} closeModal={toggleModal}>
          <AddMovieTitle>ADD MOVIE</AddMovieTitle>
          <MovieForm />
      </ModalCustom>
    </>
  )
};
