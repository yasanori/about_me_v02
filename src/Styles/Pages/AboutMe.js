import styled from 'styled-components';
import { COLORS, FONT_SIZE, PAGE_WRAPPER } from '../StyleContents';
import { TEXT_BASE } from '../Text';

export const AboutMePageWrapper = styled.main`
  width: PAGE_WRAPPER.WIDTH;
  padding: 10% 25%;

`
export const ProfileWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 10% 15%;
`

export const Profiles = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 5% 0;
  justify-content: space-between;
`

export const ProfileLists = styled.ul`

`

export const ProfileList = styled.li`
  ${TEXT_BASE}
  font-size: 1rem;
`
