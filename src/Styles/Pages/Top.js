import styled from 'styled-components';
import { COLORS, PAGE_WRAPPER } from '../StyleContents';
import { TEXT_BASE } from '../Text';

export const TopPageWrapper = styled.main`
width: ${PAGE_WRAPPER.WIDTH};
`

export const MainImageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 34rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  margin-right: 7%;
`

export const ServiceWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 5rem 15%;
`

export const ServiceContents = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10% 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ServiceContentWrapper = styled.div`
  box-sizing: border-box;
  width: 22%;
  height: 27rem;
  border: 2px solid ${COLORS.MAIN};
  border-radius: 2%;
  padding: 1rem;
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
