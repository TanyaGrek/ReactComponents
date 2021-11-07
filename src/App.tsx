import React from 'react';
import { Header, Footer } from 'components';
import { Home } from './containers/Home';
import ErrorBoundary from './utils/errorBoundary';

import 'assets/styles/index.scss';

export const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      <Footer />
    </>
  )
}