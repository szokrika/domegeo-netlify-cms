import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const FooterContainer = styled.footer`
  background: #131d33;
  padding: 3rem 4vw 0.5rem 4vw;
  .top {
    display: flex;
    justify-content: center;

    ${MEDIA.PHONE`
      flex-direction: column;
    `};

    .left {
      width: 50%;
      padding-bottom: 15px;
      ${MEDIA.PHONE`
        width: 100%;
      `};
    }
    .right {
      margin-left: auto;
      display: flex;
      flex-direction: column;
      padding-bottom: 15px;
      padding-left: 5px;
      ${MEDIA.PHONE`
        margin-left: 0;
      `};
      h4 {
        color: #818c98;
        display: inline-block;
        margin-bottom: 10px;
      }
      svg {
        display: inline-block;
        margin-right: 10px;
      }
      a {
        color: #818c98;
        transition: all 0.5s ease;
        display: inline-block;
        line-height: 1;
        height: 4rem;
        display: flex;
        align-items: center;
        &:hover {
          color: #eee;
        }
      }
      .linkedin {
        &:after {
          content: 'LinkedIn profile';
          transform: translateY(-1px);
        }
      }
    }
  }
  ${MEDIA.MIN_TABLET`
    padding: 3rem 4rem 0.5rem 4rem;
`};

  img {
    filter: gray;
    filter: opacity(0.8) grayscale(100%);
    &:hover {
      -webkit-filter: grayscale(100%) opacity(1) brightness(1.8);
      filter: gray;
      filter: opacity(1) grayscale(100%) brightness(1.8);
    }
  }
  p.copy {
    color: white;
    display: block;
    padding: 1rem 0;
    margin-bottom: 1rem;
    color: #818c98;
    &:before {
      content: '\00a9';
      display: inline-block;
      padding-right: 3px;
    }
  }
`;
