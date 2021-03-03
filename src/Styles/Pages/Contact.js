import styled from 'styled-components';
import { COLORS, FONT_SIZE, PAGE_WRAPPER } from '../StyleContents';
import { TEXT_BASE } from '../Text';
import { LINK_BASE } from '../Link';
import { sp, pc } from '../../Styles/media';


export const ContactPageWrapper = styled.main`
  box-sizing: border-box;
  width: ${PAGE_WRAPPER.WIDTH};
  ${pc`
    padding: 10% 25%;
  `}
  ${sp`
    padding: 10% 0;
  `}
`
