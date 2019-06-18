import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from '../ConfiguratorStyle'
import MediaQuery from 'react-responsive'
import Context from '../../../component/ConfiguratorPage/Context/Context'

const DisplayPage = props => {

    const { page, classes } = props

    const rendering = responsive => {
        if (responsive) {
            if (page === 1) return true
            return false
        } else {
            if (page === 0) {
                return classes.displayRigth
            } else if (page === 1) {
                return classes.displayLeft
            } else if (page === 2) {
                return classes.mask
            } else if (page === 3) {
                return classes.mask
            } else {
                return false
            }
        }
    }

    return (
        <Fragment>
            <MediaQuery minWidth={960}>
                {rendering() ? (
                    <div className={rendering()}>
                        <div className={page % 2 ? classes.blueRight : classes.blueLeft}>
                            <Context page={page} />
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                {rendering(true) ? (
                    <div className={classes.blueSide}>   
                        <Context page={page} />
                    </div>
                ) : (
                    <div></div>
                )}
            </MediaQuery>
        </Fragment>
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage)