import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ title, meta, children }) => {
  return (
    <article className='uk-article'>
      <h1 className='uk-article-title'>{title}</h1>
      {meta && <p className='uk-article-meta'>{meta}</p>}
      {children}
    </article>
  )
}

Article.propTypes = {
  title: PropTypes.any,
  meta: PropTypes.any
}

export default Article
