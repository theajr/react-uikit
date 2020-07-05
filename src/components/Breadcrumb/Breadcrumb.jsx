import React from 'react'
import PropTypes from 'prop-types'

const BreadcrumbItem = ({ disabeld, href, children }) => {
  const content = href ? <a href={href}>{children}</a> : children
  return <li>{content}</li>
}

const Breadcrumb = ({ children }) => {
  return <ul className='uk-breadcrumb'>{children}</ul>
}

Breadcrumb.Item = BreadcrumbItem

Breadcrumb.propTypes = {
  children: PropTypes.node
}

export default Breadcrumb
