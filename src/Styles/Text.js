import styled from 'styled-components'
import { COLORS, FONT_SIZE } from './StyleContents';

export const TEXT_BASE = `
  text-align: left;
  color: ${COLORS.FONT_MAIN};
  font-weight: normal;
  font-weight: 300;
`

export const SubTitle = styled.h2`
  ${TEXT_BASE}
  font-size: ${FONT_SIZE.SUBTITLE};
  line-height: 1rem;
  text-align: center;
  letter-spacing: 8px;
  font-weight: 100;
`

export const MiniTitle = styled.h3`
  ${TEXT_BASE}
  font-size: ${FONT_SIZE.MINITITLE};
  text-align: left;
  letter-spacing: 4px;
  font-weight: 100;
`
