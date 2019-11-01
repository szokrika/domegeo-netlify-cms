import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;
export const Container = styled(FullContainer)`
  background-color: ${props => (props.color ? props.color : 'none')};
  margin-bottom: ${props => (props.bottom ? props.bottom : 'none')};

  width: ${props => (props.full ? '100%' : 'auto')};
  ${MEDIA.MIN_TABLET`
    max-width: 1200px;
    flex-direction: ${props => (props.flex ? 'row' : 'column')};
  `};
`;
export default FullContainer;
