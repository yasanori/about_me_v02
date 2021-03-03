import styled from 'styled-components';
import { COLORS, PAGE_WRAPPER } from '../StyleContents';
import { TEXT_BASE } from '../Text';
import { sp, pc } from '../../Styles/media';

export const WorkPageWrapper = styled.main`
  box-sizing: border-box;
  width: ${PAGE_WRAPPER.WIDTH};
  padding: 10% 15%;
  text-align: center;
`

export const CommingText = styled.h3`
  ${TEXT_BASE}
  display: inline-block;
  font-size: 3rem;
  margin: 5%;
  padding: 5%;
  border: 1.5px solid ${COLORS.MAIN};
  border-radius: 2%;
  ${pc`
  `}
  ${sp`
      margin: 20% 0;
  `}
`
