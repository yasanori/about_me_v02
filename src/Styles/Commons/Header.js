import styled from 'styled-components'
import { BaseLink } from '../Base';

import { Link } from 'react-router-dom';

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
  font-size: 3rem;
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
  font-size: 1.4rem;
`;
