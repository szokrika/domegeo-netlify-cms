import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('data', data)
  if (data) {
    return (
      <IndexPageTemplate
      image={data.image}
      title={data.title}
      heading={data.heading}
      subheading={data.subheading}
      mainpitch={data.mainpitch}
      description={data.description}
      introservices={data.introservices}
      services={data.services}
      intropartners={data.intropartners}
      partners={data.partners}
      news={data.news}
      intronews={data.intronews}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
