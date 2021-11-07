import React, { useState } from 'react';
import { Row } from 'assets/styles/Row';

import {
  MovieCardGenre,
  MovieCardImage,
  MovieCardTitle,
  MovieCardWrapper,
  MovieCardYear,
  MovieCardOptions,
  MovieCardOptionsList, MovieCardOptionsListItem,
} from './MovieCard.styles';

interface IMovieCard {
  movie: {
    id: number,
    title: string,
    release_date: string,
    movie_url: string,
    rating: string,
    genre: string,
    runtime: string,
    overview: string,
  },
  edit: (id: number) => void
  remove: (id: number) => void
  changeMode: () => void
}

export const MovieCard = ({
  movie: {
    id,
    movie_url,
    genre,
    title,
    release_date,
  },
  remove,
  edit,
  changeMode,
}: IMovieCard) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <MovieCardWrapper onClick={() => {changeMode(); isOpen && setIsOpen(false)}}>
      <MovieCardOptions onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <MovieCardOptionsList>
          <MovieCardOptionsListItem onClick={() => edit(id)}>Edit</MovieCardOptionsListItem>
          <MovieCardOptionsListItem onClick={() => remove(id)}>Delete</MovieCardOptionsListItem>
        </MovieCardOptionsList>
      )}
      <MovieCardImage src={movie_url} alt='movie banner' />
      <Row justifyContent='space-between' alignItems='center'>
        <div>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardGenre>{genre}</MovieCardGenre>
        </div>
        <MovieCardYear>{release_date}</MovieCardYear>
      </Row>
    </MovieCardWrapper>
  )
}