import React, { FC, useState } from 'react';
import { Button } from 'components';
import { MovieForm } from '../MovieForm/MovieForm';
import { AddMovieTitle } from './EditMovie.styles';
import { IMovie } from '../../interfaces/IMovie';
import { ModalCustom } from '../../components/Modal/Modal';

type EditMovieProps = {
  movie: IMovie;
  isOpen: boolean;
  editMovie(): void;
}

export const EditMovie: FC<EditMovieProps> = ({
  movie,
  isOpen,
  editMovie
}: EditMovieProps) => {
  console.log('EditMovie', isOpen)
  return (
    <>
      <Button size="s" type="blurred" title="+ Add movie" onClick={editMovie} />
      <ModalCustom isOpen={isOpen} closeModal={editMovie}>
        <>
          <AddMovieTitle>Edit movie</AddMovieTitle>
          <MovieForm movie={movie}/>
        </>
      </ModalCustom>
    </>
  )
};
