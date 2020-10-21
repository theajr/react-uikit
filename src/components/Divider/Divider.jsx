import React from 'react';
import PropTypes from 'prop-types';
import cx from '../../utils/cx';

const Divider = ({ withIcon = false, isSmallSize = false, isVertical = false, ...rest }) => {
  const classes = cx({
    ['uk-divider-icon']: withIcon,
    ['uk-divider-small']: isSmallSize,
    ['uk-divider-vertical']: isVertical
  });

  return (
    <hr className={classes} {...rest}/>
  )
};

Divider.propTypes = {
    withIcon: PropTypes.bool,
    isSmallSize: PropTypes.bool,
    isVertical: PropTypes.bool,
};

export default Divider;
