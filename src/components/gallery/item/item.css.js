import styled from 'styled-components';
import MEDIA from '../../../helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0 0 0;
  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Copy = styled.p`
  color: #757575;
  margin: 1rem 0 0 0;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
