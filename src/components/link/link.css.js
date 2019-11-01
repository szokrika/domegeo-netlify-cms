import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const StyledLink = styled(GatsbyLink)`
  color: ${props => props.color || props.theme.colors.primary.value};

  &:focus,
  &:hover {
    text-decoration: none;
  }
`;

StyledLink.defaultProps = {
  color: 'inherit',
};
