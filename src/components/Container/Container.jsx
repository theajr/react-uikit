import PropTypes from 'prop-types'
import React from 'react'
import cx from '../../utils/cx'

export const containerSizes = ['xsmall', 'small', 'large', 'xlarge', 'expand']

const Container = ({ size, children, className = '', ...rest }) => {
  const classes = cx({
    [className]: true,
    'uk-container': true,
    [`uk-container-${size}`]: true
  })
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Container.propTypes = {
  size: PropTypes.oneOf(containerSizes),

  children: PropTypes.node
}

export default Container
