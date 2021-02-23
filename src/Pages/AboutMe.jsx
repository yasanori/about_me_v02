import React from 'react'
import Profiles from '../Components/Presentations/AboutMe/Profiles';
import SnsIconLists from '../Components/Presentations/AboutMe/SnsIconLists';

import { SubTitle, MiniTitle } from '../Styles/Text'
import { AboutMePageWrapper, ProfileWrapper } from '../Styles/Pages/AboutMe'


import TwitterIcon from '../images/twitter.png'
import InstaramIcon from '../images/instagram.png'
import FacebookIcon from '../images/facebook.png'
import GithubIcon from '../images/github.png'


const AboutMe = () => {

  const SnsDetas = [
    { icon: TwitterIcon, url: 'https://twitter.com/___yu_suke___' },
    { icon: FacebookIcon, url: 'https://www.facebook.com/masanori.nagao.12' },
    { icon: GithubIcon, url: 'https://github.com/yasanori' },
  ]

  return (
    <AboutMePageWrapper>
      <SubTitle>
        about me
    </SubTitle>
      <ProfileWrapper>
        <MiniTitle>
          Profile
        </MiniTitle>
        <Profiles />
        <SnsIconLists SnsDetas={SnsDetas} />
      </ProfileWrapper>
    </AboutMePageWrapper>
  )
}

export default AboutMe
