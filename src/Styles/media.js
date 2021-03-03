import {
  css
} from 'styled-components';

export const MEDIA_MAX_WIDTH = {
  SP: 560,
  PC: 1024
}

export const sp = (first, ...interpolations) => css`
    @media (max-width: ${MEDIA_MAX_WIDTH.SP}px) {
        ${css(first, ...interpolations)}
    }
`;

export const pc = (first, ...interpolations) => css`
    @media (min-width: ${MEDIA_MAX_WIDTH.PC}px) {
        ${css(first, ...interpolations)}
    }
`;
