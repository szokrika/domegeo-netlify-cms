import styled from 'styled-components';
const NewsItem = styled.div`
  clear: both;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;

  .gatsby-image-wrapper {
    float: left;
    margin: 0 2rem 2rem 0;
    border-radius: 15px;
  }
`;
export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 160px;
`;
export default NewsItem;
