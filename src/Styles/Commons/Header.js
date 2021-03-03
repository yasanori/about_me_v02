import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { FONT_SIZE } from '../StyleContents';
import { LINK_BASE } from '../Link';

import { sp, pc } from '../../Styles/media';


export const HeaderWrapper = styled.div`
  height: 7rem;
  width: 100vw;
  padding: 1rem 0;
  box-sizing: border-box;
  ${pc`
    padding: 1rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `}
  ${sp`
    text-align: center;
    `}
`

export const HeaderBaseLink = styled.a`
  ${LINK_BASE}
  font-size: FONT_SIZE.HEADER_NAV;
  &:hover{
    border-bottom: solid 1px #BDC0BA;
  }
`

export const HeaderTitle = styled(HeaderBaseLink.withComponent(Link))`
  font-size: ${FONT_SIZE.HEADER_TITLE};
  line-height: 3rem;
    font-weight: 200;
`;

export const HeaderNavWrapper = styled.nav`
  ${pc`
    width: 30%;
  `}
  ${sp`
    text-align: center;
    opacity: 0.6;
  `}

`

export const HeaderLists = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const HeaderList = styled.li`
`

export const HeaderNavLink = styled(HeaderBaseLink.withComponent(Link))`
  font-size: ${FONT_SIZE.HEADER_NAV};
`;
