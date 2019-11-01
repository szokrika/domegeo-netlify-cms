import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const Container = styled.div`
  padding: ${({ slim }) => (slim ? '15px 0' : '30px 15px')};
  ${MEDIA.MIN_TABLET`
    padding: ${({ slim }) => (slim ? '15px 0' : '30px')};
  `};
  width: ${({ width }) => (width ? width : 'auto')};
  > div {
    > h2 {
      font-size: 24px;
      font-weight: bold;
      line-height: 2em;
      margin-top: 2em;
      margin-bottom: 1em;
    }
    > h3 {
      font-size: 24px;
      font-weight: bold;
      line-height: 2em;
      margin-top: 2em;
      margin-bottom: 1em;
    }
    p {
      font-size: 2rem;
      line-height: 1.2;
    }
    > ul {
      padding-left: 1em;
      > li {
        line-height: 2em;
        list-style: disc;
        p {
          line-height: 2em;
          font-size: inherit;
        }
        > ul {
          transform: translateY(-1em);
          padding-left: 1.8em;
          margin-bottom: 0;
          > li {
            list-style: circle;
          }
        }
      }
    }
  }
`;
