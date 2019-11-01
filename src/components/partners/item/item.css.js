import styled from 'styled-components';
import MEDIA from '../../../helpers/mediaTemplates';

export const ItemContainer = styled.div`
  background: #fff;
  display: block;
  padding: 1vw;
  width: 13vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex-basis: 45%;
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;

  ${MEDIA.MIN_TABLET`
    flex-basis: 130px;
    margin-bottom: 0;
    border-radius: 15px;
    transition: all 0.5s ease;
    &:hover {
      border-radius: 15px;
    }
  `}
  ${MEDIA.MIN_DESKTOP`
    flex-basis: 150px;
  `}
  a {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: #fff;
    img {
      -webkit-filter: brightness(1.5) grayscale(100%);
      -moz-filter: brightness(1.5) grayscale(100%);
      filter: brightness(1.5) grayscale(100%);
      transition: all 2s linear;
      &:hover {
        -webkit-filter: brightness(1.5) grayscale(0);
        -moz-filter: brightness(1.5) grayscale(0);
        filter: brightness(1.5) grayscale(0);
      }
    }
  }
`;
