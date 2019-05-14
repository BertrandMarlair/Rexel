import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import typographyStyle from './typographyStyle'

function Normal({ ...props }) {
  const { classes, children, centered, preWrap } = props
  return <div className={`${classes.defaultFontStyle} ${classes.normalText}`} style={{ textAlign: centered ? 'center' : 'left', whiteSpace: preWrap ? 'pre-wrap' : 'normal', wordBreak: preWrap ? 'break-all' : 'normal'}}>{children}</div>
}

Normal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(typographyStyle)(Normal)
