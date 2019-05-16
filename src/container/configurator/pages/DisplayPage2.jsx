import React from 'react'
import Context from 'component/ConfiguratorPage/Context/Context'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"

const DisplayPage = props => {

    const { page, classes } = props

    const rendering = () => {
        if (page === 0) {
            return classes.displayRigth
        } else if (page === 1) {
            return classes.displayLeft
        } else if (page === 2) {
            return classes.mask
        } else {
            return false
        }
    }

    return (
        rendering() ? (
            <div className={rendering()}>
                <div className={page % 2 ? classes.blueRight : classes.blueLeft}>
                    <Context page={page}  />
                </div>
            </div>
        ): (
            <div></div>
        )
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);