import React, { useState } from 'react';
import { Row } from 'assets/styles/Row';
import { Container } from 'assets/styles/Container';
import { IMovie } from '../../interfaces/IMovie';
import { MovieCard } from '../MovieCard/MovieCard';
import { Tabs } from '../../components/Tabs/Tabs';
import { GENRES_LIST } from '../../constants/genres';
import { NavBar } from '../NavBar/NavBar';
import { SortDDL } from '../../components/SortDDL/SortDDL';
import { MOVIES_MOCK } from '../../constants/mocks/movies';
import { EditMovie } from '../EditMovie/EditMovie';
import { RemoveMovie } from '../RemoveMovie/RemoveMovie';
import { MovieListWrapper, MovieListCount } from './MovieList.styles';

export const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const removeMovie = (id: number) => {
    console.log('removing ', id);
    setIsRemoveModalOpen(true);
  };

  const editMovie = (id: number) => {
    console.log('editing ', id);
    setIsEditModalOpen(false);
  };

  const handleOpenConfirmModal = (id: number) => {
    setSelectedMovie(MOVIES_MOCK.find(({ id: movieId }: IMovie) => movieId === id));
    setIsRemoveModalOpen(true);
  }
  const handleOpenEditModal = (id: number) => {
    console.log('handleOpenEditModal')
    setSelectedMovie(MOVIES_MOCK.find(({ id: movieId }: IMovie) => movieId === id));
    setIsEditModalOpen(true);
  };

  const cancel = () => {
    setIsEditModalOpen(false);
    setIsRemoveModalOpen(false);
    setSelectedMovie(null);
  }

  return (
    <>
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
                remove={handleOpenConfirmModal}
                edit={handleOpenEditModal}
              />
            ))}
          </Row>
        </MovieListWrapper>
      </Container>
      {isEditModalOpen && (
        <EditMovie movie={selectedMovie} isOpen={isEditModalOpen} editMovie={editMovie} />
      )}
      {isRemoveModalOpen && (
        <RemoveMovie isOpen={isRemoveModalOpen} submit={removeMovie} cancel={cancel} />
      )}
    </>
  )
}