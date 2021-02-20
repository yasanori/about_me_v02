import React from 'react'

import MainImg from '../../../images/main_image.jpg';
import MeImg from '../../../images/me.png'
// styled
import { MainImageWrapper, MainImageContent, MeImage } from '../../../Styles/Pages/Top';

const MainImage = () => {
  return (
    <MainImageWrapper>
      <MeImage src={MeImg} />
      <MainImageContent src={MainImg} />
    </MainImageWrapper>
  )
}

export default MainImage
