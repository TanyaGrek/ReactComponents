import React from 'react';
import { Container } from 'assets/styles/Container';
import { Row } from 'assets/styles/Row';
import {
  BannerWrapper,
  Title,
  MovieCardGenre,
  MovieCardImage,
  MovieCardTitle,
  MovieCardWrapper,
  MovieCardYear,
  MovieCardDescription,
  BackToSearch,
} from './Banner.styles';

export const BannerItemDetails = ({
  changeMode,
  selectedItem: {
    movie_url,
    genre,
    title,
    release_date,
    overview,
    runtime
  }
}: any) => {
  return (
    <BannerWrapper>
      <Container>
        <BackToSearch onClick={changeMode} />
        <Row justifyContent="flex-start" alignItems="flex-start" gap="30px">
          <MovieCardImage src={movie_url} alt="movie banner" />
          <MovieCardWrapper>
            <MovieCardTitle>{title}</MovieCardTitle>
            <MovieCardGenre>{genre}</MovieCardGenre>
            <Row justifyContent="flex-start" alignItems="flex-start" gap="50px">
              <MovieCardYear>{release_date}</MovieCardYear>
              <MovieCardYear>{runtime}</MovieCardYear>
            </Row>
            <MovieCardDescription>{overview}</MovieCardDescription>
          </MovieCardWrapper>
        </Row>
      </Container>
    </BannerWrapper>
  )
};
