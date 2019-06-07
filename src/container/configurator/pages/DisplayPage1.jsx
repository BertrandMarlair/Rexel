import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"
import Start from 'component/ConfiguratorPage/Start/Start';
import MediaQuery from "react-responsive";

const DisplayPage = props => {
    const { page, classes } = props
    
    const rendering = (responsive) => {
        if(responsive){
            if(page === 0) return true
            return false
        }else{
            if(page === 0){
                return classes.displayLeft
            }else if(page === 1){
                return classes.mask
            }else{
                return false
            }
        }
    }

    return (
        <Fragment>
            <MediaQuery minWidth={960}>
                {rendering() ? (
                    <div className={rendering()}>
                        <div className={page % 2 ? classes.whiteLeft : classes.whiteRight}>
                            <Start/>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                {rendering(true) ? (
                    <div className={classes.whiteSide}>
                        <Start/>
                    </div>
                ): (
                    <div></div>
                )}
            </MediaQuery>
        </Fragment>
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);