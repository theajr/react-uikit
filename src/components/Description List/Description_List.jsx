import React from 'react';
import PropTypes from 'prop-types';
import cx from '../../utils/cx';

const DescriptionList = ({ description = [], enableDivider = false, ...rest }) => {
  const classes = cx({
    ['uk-description-list']: true,
    ['uk-description-list-divider']: enableDivider
  });

  return (
    <dl className={classes} {...rest}>
      {
        description.map(item => 
          <>
            <dt>{item.title}</dt>
            <dd>{item.description}</dd>
          </>)
      }
    </dl>
  )
};

DescriptionList.propTypes = {
    withIcon: PropTypes.shape([
      {
        title: PropTypes.string,
        description: PropTypes.string
      }  
    ]).isRequired,
    enableDivider: PropTypes.bool
};

export default DescriptionList;
