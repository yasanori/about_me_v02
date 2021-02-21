import React from 'react'

import { ServiceContentWrapper, ServiceImage, ServiceDescription, ServiceContentTitle } from '../../../Styles/Pages/Top'



const ServiceContent = ({ image, title, description }) => {
  return (
    <ServiceContentWrapper>
      <ServiceImage src={image} />
      <ServiceContentTitle>
        {title}
      </ServiceContentTitle>
      <ServiceDescription>
        {description}
      </ServiceDescription>
    </ServiceContentWrapper>
  )
}

export default ServiceContent
