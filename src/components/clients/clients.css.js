import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

const ClientCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  ${MEDIA.MIN_TABLET`
    flex-direction: row;
    flex-wrap: wrap;
  `};
  > p {
    font-size: 0.8em;
    min-width: 25%;
    margin-right: 15px;
  }
`;
export default ClientCont;
