import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const Paragraph = styled.p`
  line-height: 1.5em;
  font-family: 'Calibri', Arial, sans-serif;
  font-display: auto;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '1.8rem';
      case 'medium':
        return '1.6rem';
      case 'small':
        return '1.2rem';
      default:
        return '1.4rem';
    }
  }};

  strong {
    font-weight: 700;
  }
`;

export const Text = styled.span`
  display: block;
  line-height: 1.2em;
  color: #a40000;
  ${({ height }) =>
    height
      ? `padding-bottom: calc(${height} / 5);padding-top: calc(${height} / 5);`
      : ''};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  border-bottom: ${({ border }) => (border ? '2px solid #ddd' : 'none')};
  font-family: 'Roboto Slab', serif;
  font-display: auto;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '800';
      case 'medium':
        return '800';
      case 'small':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.6rem';
      case 'medium':
        return '3.0rem';
      case 'small':
        return '1.6rem';
      default:
        return '2rem';
    }
  }};
  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        case 'medium':
          return '2.4rem';
        case 'small':
          return '1.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
