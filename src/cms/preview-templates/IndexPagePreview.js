import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { image, title, heading, description, introservices, services, intropartners, partners, intronews, news } = data;

  console.log('data', data)
  if (data) {
    return (
      <IndexPageTemplate
        // image={image}
        title={title}
        heading={heading}
        description={description}
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
