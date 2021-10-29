import React from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { MovieList } from './modules/MovieList/MovieList';
import ErrorBoundary from './utils/errorBoundary';

import 'assets/styles/index.scss';

export const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
      <Footer />
    </>
  )
}