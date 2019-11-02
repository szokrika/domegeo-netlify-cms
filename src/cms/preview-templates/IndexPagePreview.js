import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('data', data)
  if (data) {
    return (
      <IndexPageTemplate
        image={entry.getAsset(['data', 'image'])}
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
        // introservices={frontmatter.introservices}
        // introservices={frontmatter.introservices}
        // services={frontmatter.services}
        // intropartners={frontmatter.intropartners}
        // partners={frontmatter.partners}
        // news={frontmatter.news}
        // intronews={frontmatter.intronews}
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
