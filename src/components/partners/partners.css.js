import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const PartnersContainer = styled.div`
  background: #eee;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-flow: wrap;

  ${MEDIA.MIN_TABLET`
    font-size: 6rem;
  `}
`;
