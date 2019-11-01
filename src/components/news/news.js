import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Box from '../box/box';
import Title, { P } from '../title/title';
import Link from '../link/link';
import NewsItem, { NewsContent } from './news.css';

const News = ({ items }) => {
  console.log('news items', items)
  return (
    <Box padding="25px 15px">
      <Title height="70px" as="h3" size="medium">
        Latest News
      </Title>
      {items &&
        items.map((item, i) => (
          <NewsItem key={i}>
            <P
              bold
              dangerouslySetInnerHTML={{
                __html: item.title,
              }}
            />
            {/* <Link to={item.link}> */}
              <Img
                fixed={item.image ? item.image.childImageSharp.fixed : {}}
                alt={item.title}
              />
            {/* </Link> */}
            <NewsContent>
              <P
                size="small"
              >{item.text}</P>
              {/* {item.reference && <P size="small">{item.reference}</P>} */}
              {item.link &&
                item.link.map(link => (
                  <P size="small" key={link.url}>
                    <Link to={link.url}>{link.label}</Link>
                  </P>
                ))}
            </NewsContent>
          </NewsItem>
        ))}
    </Box>
  );
};

News.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string,
    })
  ),
};
export default News;
