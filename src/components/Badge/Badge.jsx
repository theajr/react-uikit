import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ overflowCount, children }) => {
  let content = children
  let max = overflowCount
  if (!max) max = Infinity
  if (typeof children === 'number' && max < children) content = `${max}+`
  return <span className='uk-badge'>{content}</span>
}

Badge.propTypes = {
  children: PropTypes.node,
  overflowCount: PropTypes.number
}
Badge.defaultProps = {
  overflowCount: Infinity
}
export default Badge
