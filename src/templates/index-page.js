import React from 'react';
import PropTypes from 'prop-types';
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
  intro,
  services,
  news,
  partners,
}) => {

  console.log('news', news )

  return(
    <Layout data={{ title }}>
      <Hero effects image={image} className="home-hero" />
      <Container full>
        <Container>
          <Title height="100px" as="h1" size="large" center border>
            {mainpitch.title}
          </Title>
          <Box padding="50px 15px">
            <P>
              {mainpitch.description}
            </P>
          </Box>
        </Container>

        <Title height="100px" as="h2" size="large" center>
          Our Services
        </Title>
        {services && <Gallery items={services} />}
      </Container>

      <Container color="#eee" full bottom="30px">
        <Box padding="25px 15px">
          <Title height="70px" as="h3" size="medium">
            Our Partners
          </Title>
          <P>
            Dome GeoConsulting Inc. has developed professional partnerships with
            consultants and experts from other disciplines for collaboration by
            choice and opportunity.
          </P>
          <P>
            Each partner is independent; none of the companies hold any interest
            or shares in the other partners.
          </P>
          {partners && <Partners items={partners} />}
        </Box>
      </Container>
      <Container bottom="30px 15px" full>
        {news && <News items={news} />}
      </Container>
    </Layout>
    // <div>
    //   <Hero effects image={image} className="home-hero" />
    //   <section className="section section--gradient">
    //     <div className="container">
    //       <div className="section">
    //         <div className="columns">
    //           <div className="column is-10 is-offset-1">
    //             <div className="content">
    //               <div className="content">
    //                 <div className="tile">
    //                   <h1 className="title">{mainpitch.title}</h1>
    //                 </div>
    //                 <div className="tile">
    //                   <h3 className="subtitle">{mainpitch.description}</h3>
    //                 </div>
    //               </div>
    //               <div className="columns">
    //                 <div className="column is-12">
    //                   <h3 className="has-text-weight-semibold is-size-2">
    //                     {heading}
    //                   </h3>
    //                   {/* <p>{description}</p> */}
    //                 </div>
    //               </div>
    //               <Gallery items={intro.blurbs} />
    //               <Partners items={intro.blurbs} />
    //               <div className="column is-12">
    //                 <h3 className="has-text-weight-semibold is-size-2">
    //                   Latest stories
    //               </h3>
    //                 {/* <BlogRoll /> */}
    //                 {/* <div className="column is-12 has-text-centered">
    //                   <Link className="btn" to="/blog">
    //                     Read more
    //                 </Link>
    //                 </div> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
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
        intro={frontmatter.intro}
        services={frontmatter.services}
        partners={frontmatter.partners}
        news={frontmatter.news}
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
        intro {
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
        partners {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
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
