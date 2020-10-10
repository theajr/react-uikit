import PropTypes from 'prop-types'
import React from 'react'

const Video = ({ src, showControls, hidden }) => {
  return (
    <video
      src={src}
      controls={showControls}
      playsinline
      hidden={hidden}
      uk-video=''
    />
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  showControls: PropTypes.bool
}

export default Video
