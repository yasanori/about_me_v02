import React from 'react'


import { SubTitle } from '../../../Styles/Text'
import { ServiceWrapper, ServiceContents } from '../../../Styles/Pages/Top'
import ServiceContent from './ServiceContent'

import DesignImage from '../../../images/design.png'
import CodingImage from '../../../images/pc.png'
import SmileImage from '../../../images/smile.png'

const Service = () => {

  const Services = [
    {
      image: DesignImage,
      title: "desine",
      description: ""
    },
    {
      image: CodingImage,
      title: "programing",
      description: ""
    },
    {
      image: SmileImage,
      title: "smaile",
      description: ""
    }
  ]

  return (
    <ServiceWrapper>
      <SubTitle>
        Service
      </SubTitle>
      <ServiceContents>
        {
          Services.map((service, i) =>
            <ServiceContent
              key={i}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          )
        }
      </ServiceContents>
    </ServiceWrapper>
  )
}

export default Service
