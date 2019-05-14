import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"

const DisplayPage = props => {

    const { page, classes } = props

    const rendering = () => {
        // return false
        if (page === 1) {
            return classes.prepared
        } else if (page === 2) {
            return classes.displayRigth
        } else if (page === 3) {
            return classes.displayLeft
        } else {
            return false
        }
    }

    return (
        rendering() ? (
            <div className={rendering()}>
                <div className={page % 2 ? classes.blueRight : classes.blueLeft}>
                    <h1>Page 4</h1>
                    <h2>Page: {page}</h2>
                    <Link to={"3"}>next</Link>
                    <Link to={"1"}>prev</Link>
                </div>
            </div>
        ):(
            <div className={classes.prepared}></div>
        )
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);