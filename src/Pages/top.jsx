import React from 'react'

import MainImage from '../Components/Presentations/Tops/MainImage'
import Service from '../Components/Presentations/Tops/Service';
import { TopPageWrapper } from '../Styles/Pages/Top';


const Top = () => {
  return (
    <TopPageWrapper>
      <MainImage />
      <Service />
    </TopPageWrapper>
  )
}

export default Top
