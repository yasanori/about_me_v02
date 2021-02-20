import styled from 'styled-components';
import { COLORS } from '../StyleContents';


export const MainImageWrapper = styled.div`
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
