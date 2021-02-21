import React from 'react'

import { ServiceContentWrapper, ServiceImage, ServiceDescription, ServiceContentTitle } from '../../../Styles/Pages/Top'

import DesignImage from '../../../images/design.png'
import CodingImage from '../../../images/pc.png'
import SmileImage from '../../../images/smile.png'

const ServiceContent = ({ image, title, description }) => {
  return (
    <ServiceContentWrapper>
      <ServiceImage src={DesignImage} />
      <ServiceDescription>
        <ServiceContentTitle>
          design
            </ServiceContentTitle>
        デザイン承ります。
          </ServiceDescription>
    </ServiceContentWrapper>
  )
}

export default ServiceContent
