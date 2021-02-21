import React from 'react'


import { SubTitle } from '../../../Styles/Text'
import { ServiceWrapper, ServiceContents } from '../../../Styles/Pages/Top'
import ServiceContent from './ServiceContent'

import DesignImage from '../../../images/design.png'
import CodingImage from '../../../images/pc.png'
import SmileImage from '../../../images/smile.png'

const Service = () => {

  const Servicees = {
    desine: {
      title: "desine",
      description: "デザインします。"
    },
    programing: {
      title: "programing",
      description: "アプリ開発、web制作できます。"
    },
    smile: {
      title: "smaile",
      description: "0円です。"
    },
  }

  return (
    <ServiceWrapper>
      <SubTitle>
        Service
      </SubTitle>
      <ServiceContents>
        <ServiceContent />
        <ServiceContent />
        <ServiceContent />
      </ServiceContents>
    </ServiceWrapper>
  )
}

export default Service
