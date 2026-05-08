import {definePlugin} from 'sanity'
import React from 'react'

const css = `
  /* Sanity tag input applies padding to #tags which clips typed text. */
  #tags {
    padding: 0 !important;
  }
`

function StyleInjector(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('style', {dangerouslySetInnerHTML: {__html: css}}),
    props.renderDefault(props)
  )
}

export const customStyles = definePlugin({
  name: 'custom-styles',
  studio: {
    components: {
      layout: StyleInjector,
    },
  },
})
