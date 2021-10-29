import React from 'react';
import { Row } from 'assets/styles/Row';

import {
  MovieCardGenre,
  MovieCardImage,
  MovieCardTitle,
  MovieCardWrapper,
  MovieCardYear,
  MovieCardOptions,
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
  }
}

export const MovieCard = ({ movie: {movie_url, genre, title, release_date} }: IMovieCard) => {
  return (
    <MovieCardWrapper>
      <MovieCardOptions />
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