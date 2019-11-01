import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const Container = styled.header`
  display: block;
  align-items: center;
  padding-top: 10px;
  > .top {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    > .linkedin {
      color: #bbb;
      margin-left: auto;
      margin-right: 30px;
      transition: all 0.5s ease;
      &:hover {
        color: #131d33;
      }
    }
    > .logo {
      margin-left: 0vw;
      ${MEDIA.MIN_TABLET`
      margin-left: 30px;
    `}

      img {
        height: 100px;
      }
    }
  }
`;
