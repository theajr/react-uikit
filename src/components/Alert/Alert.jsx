import React from 'react'
import PropTypes from 'prop-types'
import cx from '../../utils/cx'

export const alertTypes = ['primary', 'success', 'warning', 'danger']

const Alert = ({ type, closable, animation, duration, children }) => {
  const ukAlert = ''
  const classes = cx({
    'uk-alert': true,
    [`uk-alert-${type}`]: type
  })
  return (
    <div uk-alert={ukAlert} className={classes}>
      {closable && <a className='uk-alert-close' uk-close='' />}
      {children}
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.oneOf(alertTypes),
  closable: PropTypes.bool,
  animation: PropTypes.bool,
  duration: PropTypes.number,
  children: PropTypes.node
}

export default Alert
