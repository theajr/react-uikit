import React from 'react'
import PropTypes from 'prop-types'
import cx from '../../utils/cx'

const AccordionItem = ({ title, children, expanded }) => {
  const classes = cx({ 'uk-open': expanded })
  return (
    <li className={classes}>
      <a className='uk-accordion-title' href='#'>
        {title}
      </a>
      <div className='uk-accordion-content'>{children}</div>
    </li>
  )
}

const Accordion = ({ collapsible, children }) => {
  const ukAccordion = `collapsible: ${collapsible}`
  return <ul uk-accordion={ukAccordion}>{children}</ul>
}

Accordion.propTypes = {
  collapsible: PropTypes.bool
}

Accordion.defaultProps = {
  collapsible: true
}

Accordion.Item = AccordionItem

export default Accordion
