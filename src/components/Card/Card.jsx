import React from 'react'
import PropTypes from 'prop-types'
import cx from '../../utils/cx'

export const cardTypes = ['default', 'primary', 'secondary']
export const cardSizes = ['small', 'large']

const Header = ({ children }) => (
  <div className='uk-card-header'>
    <h3 className='uk-card-title'>{children}</h3>
  </div>
)

const CardFooter = ({ children }) => (
  <div className='uk-card-footer'>{children}</div>
)

const CardBody = ({ children }) => (
  <div className='uk-card-body'>{children}</div>
)

const Card = ({ type, avatar, title, description, footer, children, size }) => {
  const classes = cx({
    'uk-card': true,
    [`uk-card-${type}`]: type,
    [`uk-card-${size}`]: size
  })
  return (
    <div className={classes}>
      <Header>{title}</Header>
      <CardBody>{children}</CardBody>
      {footer && <div className='uk-card-footer'>{footer}</div>}
    </div>
  )
}

Card.Header = Header
Card.Footer = CardFooter

Card.propTypes = {
  type: PropTypes.oneOf(cardTypes),
  size: PropTypes.oneOf(cardSizes),
  children: PropTypes.element.isRequired
}

export default Card
