import React from 'react';
import { Row } from 'assets/styles/Row';
import { Container } from 'assets/styles/Container';
import { MovieListWrapper, MovieListCount } from './MovieList.styles';
import { MovieCard } from '../MovieCard/MovieCard';
import { Tabs } from '../../components/Tabs/Tabs';
import { GENRES_LIST } from '../../constants/genres';
import { NavBar } from '../NavBar/NavBar';
import { SortDDL } from '../../components/SortDDL/SortDDL';

const MOVIES_MOCK = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    release_date: '2019',
    movie_url: 'https://ic.pics.livejournal.com/anchiktigra/18346223/5027530/5027530_original.jpg',
    rating: '5',
    genre: 'Drama, Biography, Music',
    runtime: '2h 34min',
    overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight.',
  },
  {
    id: 2,
    title: 'Pulp Fiction',
    release_date: '2019',
    movie_url: 'https://prod.miramax.digital/media/assets/Pulp-Fiction1.png',
    rating: '5',
    genre: 'Action & Adventure',
    runtime: '2h 34min',
    overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight.',
  },
  {
    id: 12,
    title: 'Bohemian Rhapsody',
    release_date: '2019',
    movie_url: 'https://ic.pics.livejournal.com/anchiktigra/18346223/5027530/5027530_original.jpg',
    rating: '5',
    genre: 'Drama, Biography, Music',
    runtime: '2h 34min',
    overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight.',
  },
  {
    id: 22,
    title: 'Pulp Fiction',
    release_date: '2003',
    movie_url: 'https://prod.miramax.digital/media/assets/Pulp-Fiction1.png',
    rating: '5',
    genre: 'Action & Adventure',
    runtime: '2h 34min',
    overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight.',
  }
]

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