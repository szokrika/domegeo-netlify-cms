import styled from 'styled-components';
import MEDIA from '../../../helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0 0 0;
  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Copy = styled.p`
  color: #757575;
  margin: 2rem 0 0 0;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
