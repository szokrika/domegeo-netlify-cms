import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';
import Title, { P } from '../title/title';

export const NewsBox = styled.div`
  .news-title {
    margin: 1rem 0
  }

  ${MEDIA.MIN_PHONE`
    padding: 0 1rem
  `};
  
`
export const NewsItem = styled.div`
  clear: both;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  

  .gatsby-image-wrapper {
    border-radius: 15px;

    ${MEDIA.MIN_PHONE`
      float: none;
      margin: auto;
    `};

    ${MEDIA.MIN_TABLET`
      float: left;
      margin: 0 2rem 2rem 0;
    `};
  }
`;
export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 160px;

  > p {
    margin-bottom: 1rem;
  }
  
`;
export default NewsItem;
