import PropTypes from 'prop-types'
import React from 'react'
import cx from '../../utils/cx'

export const btnTypes = [
  'primary',
  'secondary',
  'text',
  'danger',
  'link',
  'default'
]

export const btnSizes = ['small', 'large']
const Button = ({ type, size, fullWidth, children, ...rest }) => {
  const classes = cx({
    'uk-button': true,
    [`uk-button-${type}`]: true,
    [`uk-width-1-1`]: fullWidth,
    [`uk-button-${size}`]: true
  })
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(btnTypes),
  size: PropTypes.oneOf(btnSizes),
  fullWidth: PropTypes.bool,
  children: PropTypes.node
}

Button.defaultProps = {}

export default Button
