import React from 'react';
import { Row } from 'assets/styles/Row';
import { Container } from 'assets/styles/Container';
import { MovieListWrapper, MovieListCount } from './MovieList.styles';
import { MovieCard } from '../MovieCard/MovieCard';
import { Tabs } from '../../components/Tabs/Tabs';
import { GENRES_LIST } from '../../constants/genres';
import { NavBar } from '../NavBar/NavBar';
import { SortDDL } from '../../components/SortDDL/SortDDL';
import { MOVIES_MOCK } from '../../constants/mocks/movies';

export const MovieList = () => {
  return (
    <Container>
      <NavBar>
        <>
          <Tabs tabs={GENRES_LIST} />
          <SortDDL />
        </>
      </NavBar>
      <MovieListWrapper>
        <Row justifyContent="flex-start" alignItems="center">
          <MovieListCount>
            <b>{MOVIES_MOCK.length}</b> movies found
          </MovieListCount>
        </Row>
        <Row justifyContent="flex-start" alignItems="center" gap="55px">
          {MOVIES_MOCK.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </Row>
      </MovieListWrapper>
    </Container>
  )
}