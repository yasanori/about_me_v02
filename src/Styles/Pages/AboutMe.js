import styled from 'styled-components';
import { COLORS, FONT_SIZE, PAGE_WRAPPER } from '../StyleContents';
import { TEXT_BASE } from '../Text';
import { LINK_BASE } from '../Link';
import { sp, pc } from '../../Styles/media';

export const AboutMePageWrapper = styled.main`
  box-sizing: border-box;
  width: ${PAGE_WRAPPER.WIDTH};

      ${pc`
  padding: 10% 25%;
`}
${sp`
  padding: 10% 0;
`}
`

export const ProfileWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 10% 15%;
  ${pc`
  `}
  ${sp`
      margin: 5% 0;
  `}
`

export const ProfilesStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 5% 0;
  ${pc`
      justify-content: space-between;
  `}
  ${sp`
      flex-direction: column;
  `}
`

export const ProfileLists = styled.ul`
  ${pc`
  `}
  ${sp`
      padding: 10% 0;
      line-height: 1.6rem;
      :first-child{
        border-bottom: 1px solid ${COLORS.MAIN};
      }
  `}
`

export const ProfileList = styled.li`
  ${TEXT_BASE}
  font-size: 1rem;
`
export const SnsIconListsStyle = styled.ul`
width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const SnsIconList = styled.li`
  width : 7%;
  margin: 1%;
`

export const SnsIconLink = styled.a`
  ${LINK_BASE}
`

export const SnsIconImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  object-fit: cover;
  &:hover{
    opacity: 0.3;
  }
`
