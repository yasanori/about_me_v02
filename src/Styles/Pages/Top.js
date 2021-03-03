import styled from 'styled-components';
import { COLORS, PAGE_WRAPPER } from '../StyleContents';
import { TEXT_BASE } from '../Text';
import { sp, pc } from '../../Styles/media';

export const TopPageWrapper = styled.main`
width: ${PAGE_WRAPPER.WIDTH};
`

export const MainImageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  ${pc`
    height: 34rem;
    justify-content: flex-end;
  `}
    ${sp`
    height: 23rem;
    justify-content: center;
  `}
`

export const MainImageContent = styled.img`
  width: 70%;
  height: 30rem;
  object-fit: cover;
  border: 8px solid ${COLORS.MAIN};
  border-right: none;
  border-radius: 1% 0 0 1%;
`

export const MeImage = styled.img`
  width: auto;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${COLORS.MAIN};
  ${pc`
    margin-right: 7%;
  `}
  ${sp`
    margin-right: 0;
  `}
`

export const ServiceWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  ${pc`
    padding: 5rem 15%;
  `}
  ${sp`
    padding: 5%;
  `}
`

export const ServiceContents = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  ${pc`
    padding: 10% 0;
    justify-content: space-around;
  `}
  ${sp`
    padding: 15%;
    flex-direction: column;
  `}
`
export const ServiceContentWrapper = styled.div`
  box-sizing: border-box;
  border: 2px solid ${COLORS.MAIN};
  border-radius: 2%;
  ${pc`
    width: 22%;
    padding: 1rem;
  `}
  ${sp`
    width: 100%;
    margin: 10%;
    padding: 10%;
  `}
`

export const ServiceImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 1rem;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
`

export const ServiceContentTitle = styled.h4`
  ${TEXT_BASE}
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 5px;
  line-height: 4rem;
  color: ${COLORS.MAIN};
`

export const ServiceDescription = styled.p`
  ${TEXT_BASE}
  font-size: 1rem;
`
