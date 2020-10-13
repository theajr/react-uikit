import React from 'react';
import PropTypes from 'prop-types';
import cx from '../../utils/cx';

export const linkModifiers = [
    'primary',
    'muted',
    'text'
];

const Link = ({ modifier = 'primary', disabled = false, children, className = '', onClick = () => {}, href = '#', ...rest }) => {
  const classes = cx({
    [className]: true,
    [`uk-link-${modifier}`]: true,
    ['disabled']: disabled
  });

  const disabledStyles = disabled ? {
    'pointer-events': 'none',
    'cursor': 'not-allowed'
  } : {};

  return (
    <a className={classes} href={href} disabled={disabled} onClick={onClick} {...rest} style={disabledStyles}>
      {children}
    </a>
  )
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  modifier: PropTypes.oneOf(linkModifiers), 
  onClick: PropTypes.func
};

export default Link;
