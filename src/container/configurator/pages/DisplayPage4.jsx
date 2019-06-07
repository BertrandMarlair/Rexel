import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"
import MediaQuery from "react-responsive";
import BornesSelect from 'component/ConfiguratorPage/BornesSelect/BornesSelect';

const DisplayPage = props => {

    const { page, classes } = props

    const rendering = responsive => {
        if (responsive) {
            if (page === 3) return true
            return false
        }
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
        <Fragment>
            <MediaQuery minWidth={960}>
                {rendering() ? (
                    <div className={rendering()}>
                        <div className={page % 2 ? classes.whiteRight : classes.whiteLeft}>
                            <BornesSelect />
                        </div>
                    </div>
                ):(
                    <div className={classes.prepared}></div>
                )}
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                {rendering(true) ? (
                    <div className={classes.whiteSide}>
                        <h1>Page 4</h1>
                        <h2>Page: {page}</h2>
                        <Link to={"3"}>next</Link>
                        <Link to={"1"}>prev</Link>
                    </div>
                ) : (
                    <div></div>
                )}
            </MediaQuery>
        </Fragment>
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);