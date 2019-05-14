import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"

const DisplayPage = props => {

    const { page, classes } = props

    const rendering = () => {
        if (page === 0) {
            return classes.prepared
        } else if (page === 1) {
            return classes.displayRigth
        } else if (page === 2) {
            return classes.displayLeft
        } else if (page === 3) {
            return classes.mask
        } else {
            return false
        }
    }

    return (
        rendering() ? (
            <div className={rendering()}>
                <div className={page % 2 ? classes.whiteRight : classes.whiteLeft}>
                    <h1>Page 3</h1>
                    <h2>Page: {page}</h2>
                    <Link to={"2"}>next</Link>
                    <Link to={"0"}>prev</Link>
                </div>
            </div>
        ) : (
                <div></div>
            )
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);