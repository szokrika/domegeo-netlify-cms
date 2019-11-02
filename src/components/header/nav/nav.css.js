import styled from 'styled-components';
import MEDIA from '../../../helpers/mediaTemplates';

export const Container = styled.nav`
  display: block;
  background: #131d33;
  padding: 0 4vw;
  ${MEDIA.MIN_TABLET`
    padding: 0 4rem;
  `};
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    ${MEDIA.MIN_TABLET`
      justify-content: flex-start;
    `};
    li {
      text-transform: uppercase;
      font-size: 1.2rem;

      ${MEDIA.MIN_TABLET`
      font-size: 1rem;
    `};
      &.home {
        display: none;
        ${MEDIA.MIN_TABLET`
          display: inline-block;
        `};
      }

      a {
        color: #fff;
        transition: background-color 0.2s ease;
        text-decoration: none;
        font-family: 'Calibri', 'Open Sans', Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-display: auto;
        display: inline-block;
        padding: 2.5rem;
        ${MEDIA.TABLET`
          padding-left: 1vw;
          padding-right: 1vw;
        `};
        &:hover {
          background-color: #34699a;
        }
      }
    }
  }
`;
