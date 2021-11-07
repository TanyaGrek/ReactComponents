import React, { useContext } from 'react';
import { BannerWithSearchForm } from './BannerWithSearchForm';
import { BannerItemDetails } from './BannerItemDetails';
import { BANNER_MODES } from '../../constants/bannerModes';
import { ModeContext } from '../../containers/Home';
import { BannerHr } from './Banner.styles';

export const Banner = () => {
  const { mode, changeMode, selectedItem } = useContext(ModeContext);

  return (
    <>
      {
        mode === BANNER_MODES.SEARCH_FORM
          ? <BannerWithSearchForm />
          : <BannerItemDetails
              changeMode={() => changeMode(BANNER_MODES.SEARCH_FORM)}
              selectedItem={selectedItem}
            />
      }
      <BannerHr />
    </>
  )
};
