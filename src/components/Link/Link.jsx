import React from 'react';
import PropTypes from 'prop-types';
import cx from '../../utils/cx';
import './link.css';

export const linkModifiers = [
    'primary',
    'muted',
    'text'
];

const Link = ({ modifier = 'primary', disabled = false, children, className = '', onClick = () => {}, linkTag = '#', ...rest }) => {
  const classes = cx({
    [className]: true,
    [`uk-link-${modifier}`]: true,
    ['disabled']: disabled
  });

  return (
    <a className={classes} href={linkTag} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </a>
  )
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  linkTag: PropTypes.string,
  modifier: PropTypes.oneOf(linkModifiers), 
  onClick: PropTypes.func
};

export default Link;
