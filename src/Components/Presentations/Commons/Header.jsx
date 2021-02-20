import React from 'react'


import { HeaderWrapper, HeaderTitle } from '../../../Styles/Commons/Header';
import { HeaderNav } from './HeaderNav';


const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle to="/">
        masanori.n
     </HeaderTitle>
      <HeaderNav />
    </HeaderWrapper>
  )
}


export default Header
