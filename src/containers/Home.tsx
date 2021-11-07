import React, { createContext, useState } from 'react';

import { MovieList } from '../modules/MovieList/MovieList';

import 'assets/styles/index.scss';
import { Banner } from '../modules/Banner/Banner';
import { BANNER_MODES } from '../constants/bannerModes';

const {
  SEARCH_FORM,
} = BANNER_MODES;

export const ModeContext = createContext();

export const Home = () => {
  const [mode, setMode] = useState(SEARCH_FORM);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const changeMode = (modeType: string, movie: any) => {
    setMode(modeType);
    setSelectedItem(movie);
    // if (id) navigate.replace('/');
  }

  return (
    <ModeContext.Provider value={{
      mode,
      changeMode,
      selectedItem,
    }}>
      <Banner />
      <MovieList />
    </ModeContext.Provider>
  )
};
