import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import Layout, { Container } from '../components/layout/layout';
import Box from '../components/box/box';
import Title, { P } from '../components/title/title';
import Gallery from '../components/gallery/gallery';
import Hero from '../components/hero/hero';
import Partners from '../components/partners/partners';
import News from '../components/news/news';


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  introservices,
  services,
  intropartners,
  partners,
  intronews,
  news,
}) => {
  return(
    <Layout data={{ title }}>
      <Hero effects image={image} className="home-hero" />
      <Container full>
        <Container>
          <Title height="100px" as="h1" size="large" center border>
            {mainpitch.title}
          </Title>
          <Box padding="50px 15px">
          <Markdown
              source={mainpitch.description}
              renderers={{
                paragraph: P
              }}
            />
          </Box>
        </Container>
      {services.length > 0 && 
      <Fragment>
        <Title height="100px" as="h2" size="large" center>
          {introservices.heading}
        </Title>
        {introservices.description && <Markdown
          source={introservices.description}
          renderers={{
            paragraph: P
          }}
        />}
        {services && <Gallery items={services} />}
        </Fragment>
      }
      </Container>

      <Container color="#eee" full bottom="30px">
        <Box padding="25px 15px">
          <Title height="70px" as="h3" size="medium">
            {intropartners.heading}
          </Title>
          {intropartners.description && <Markdown
            source={intropartners.description}
            renderers={{
              paragraph: P
            }}
          />}
          {partners && <Partners items={partners} />}
        </Box>
      </Container>
      <Container bottom="30px 15px" full>
        <Title height="70px" as="h3" size="medium">
          {intronews.heading}
        </Title>
        {intronews.description && <Markdown
          source={intronews.description}
          renderers={{
            paragraph: P
          }}
        />}
        {news && <News items={news} />}
      </Container>
    </Layout>
  )}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      introservices={frontmatter.introservices}
      services={frontmatter.services}
      intropartners={frontmatter.intropartners}
      partners={frontmatter.partners}
      news={frontmatter.news}
      intronews={frontmatter.intronews}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        introservices {
          heading
          description
        }
        services {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        intropartners {
          heading
          description
        }
        partners {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          link {
            url
            label
          }
        }
        intronews {
          heading
          description
        }
        news {
          image {
            childImageSharp {
              fixed(width: 140, height: 140) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          title
          text
          link {
            url
            label
          }
        }
      }
    }
  }
`
