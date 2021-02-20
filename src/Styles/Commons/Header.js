import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { FONT_SIZE } from '../StyleContents';
import { BaseLink } from '../Base';


export const HeaderWrapper = styled.div`
  height: 7rem;
  width: 100vw;
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
`

export const HeaderTitle = styled(BaseLink.withComponent(Link))`
  font-size: ${FONT_SIZE.HEADER_TITLE};
  line-height: 3rem;
`;

export const HeaderNavWrapper = styled.nav`
width: 30%;
`

export const HeaderLists = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const HeaderList = styled.li`
`

export const HeaderNavLink = styled(BaseLink.withComponent(Link))`
  font-size: ${FONT_SIZE.HEADER_NAV};
`;
