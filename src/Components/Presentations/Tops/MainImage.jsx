import React from 'react'

import MainImg from '../../../images/main_image.jpg';
import MeImg from '../../../images/me.png'
import useMedia from 'use-media';
import { MEDIA_MAX_WIDTH } from '../../../Styles/media';
// styled
import { MainImageWrapper, MainImageContent, MeImage } from '../../../Styles/Pages/Top';

const MainImage = () => {
  const spWide = useMedia({ minWidth: MEDIA_MAX_WIDTH.SP + 'px' });
  return (
    <MainImageWrapper>
      {spWide ?
        <>
          <MeImage src={MeImg} />
          <MainImageContent src={MainImg} />
        </>
        :
        <MeImage src={MeImg} />
      }
    </MainImageWrapper>
  )
}

export default MainImage
