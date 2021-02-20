import React from 'react'

import { HeaderNavWrapper, HeaderLists, HeaderList, HeaderNavLink } from '../../../Styles/Commons/Header';


export const HeaderNav = () => {
  return (
    <HeaderNavWrapper>
      <HeaderLists>
        <HeaderList>
          <HeaderNavLink to="/about_me">
            about me
          </HeaderNavLink>
        </HeaderList>
        <HeaderList>
          <HeaderNavLink to="/work">
            work
          </HeaderNavLink>
        </HeaderList>
        <HeaderList>
          <HeaderNavLink to="/contact">
            contact
          </HeaderNavLink>
        </HeaderList>
      </HeaderLists>
    </HeaderNavWrapper>
  )
}
