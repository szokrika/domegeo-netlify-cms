import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  margin: 2rem 0;
  padding: 0 4vw;
  .gatsby-image-wrapper {
    border-radius: 15px;
  }
  ${MEDIA.TABLET`
    display: block;
  `};

  ${MEDIA.MIN_TABLET`
    padding: 0 4rem;
      .gatsby-image-wrapper {
        border-radius: 15px;
        transition: all 0.5s ease;
        overflow: hidden;
        &:hover {
          border-radius: 15px;
        }
      }
  `};
`;
