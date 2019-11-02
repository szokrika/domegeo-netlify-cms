import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';
import Box from '../box/box';
import Title, { P } from '../title/title';
import Link from '../link/link';
import NewsItem, {NewsBox, NewsContent } from './news.css';

const News = ({ items }) => {
  console.log('news items', items)
  return (
    <NewsBox style={{padding:"0"}}>
      {items &&
        items.map((item, i) => (
          <NewsItem key={i}>
             <Markdown
              source={item.title}
              renderers={{
                paragraph: props => <P bold className='news-title'>{props.children}</P>
              }}
            />
            {/* <Link to={item.link}> */}
              <Img
                fixed={item.image ? item.image.childImageSharp.fixed : {}}
                alt={item.title}
              />
            {/* </Link> */}
            <NewsContent>
            <Markdown
              source={item.text}
              renderers={{
                paragraph: props => <P size="small">{props.children}</P>
              }}
            />
            
              {/* {item.reference && <P size="small">{item.reference}</P>} */}
              {item.link &&
                  <P size="small" key={item.link.url}>
                    <Link to={item.link.url}>{item.link.label}</Link>
                  </P>
                }
            </NewsContent>
          </NewsItem>
        ))}
    </NewsBox>
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
