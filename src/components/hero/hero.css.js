import styled, { css } from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

const primary = css`
  min-height: 500px;
  height: 500px;
  height: 32vmax;
`;
const secondary = css`
  min-height: 360px;
  height: 360px;
  height: 21vmax;
`;
const effects = css`
  transition: filter 0.3s;
  -webkit-filter: contrast(1) brightness(1.3);
  filter: contrast(1) brightness(1.3);
  &:hover {
    -webkit-filter: contrast(1) brightness(1.5);
    filter: contrast(1) brightness(1.5);
  }
`;

export const Container = styled.div`
  ${props => (props.type === 'secondary' ? secondary : primary)}
  ${props => (props.effects ? effects : null)}

  > section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      color: #fff;
      font-size: 4rem;
      line-height: 1.2em;
      filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 1));

      ${MEDIA.MIN_TABLET`
        font-size: 6rem;
        margin-bottom: ${props => (props.type === 'secondary' ? '7%' : '12%')};
      `}
    }
  }
`;
