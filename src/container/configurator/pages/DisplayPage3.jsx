import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from '../ConfiguratorStyle'
import ElectricNetwork from '../../../component/ConfiguratorPage/ElectricNetwork/ElectricNetwork'
import MediaQuery from 'react-responsive'

const DisplayPage = props => {

    const { page, classes } = props

    const rendering = responsive => {
        if (responsive){
            if(page === 2) return true
            return false
        }
        if (page === 0) {
            return classes.prepared
        } else if (page === 1) {
            return classes.displayRigth
        } else if (page === 2) {
            return classes.displayLeft
        } else if (page === 3) {
            return classes.mask
        } else if (page === 4) {
            return classes.mask
        } else {
            return false
        }
    }

    return (
        <Fragment>
            <MediaQuery minWidth={960}>
                {rendering() ? (
                    <div className={rendering()}>
                        <div className={page % 2 ? classes.whiteRight : classes.whiteLeft}>
                            <ElectricNetwork page={page} />
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                {rendering(true) ? (
                    <div className={classes.whiteSide}>
                        <ElectricNetwork page={page} />
                    </div>
                ) : (
                    <div></div>
                )}
            </MediaQuery>
        </Fragment>
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage)