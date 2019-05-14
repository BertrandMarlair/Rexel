import React from 'react'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"
import Start from 'component/ConfiguratorPage/Start/Start';

const DisplayPage = props => {
    const { page, classes } = props
    
    const rendering = () => {
        if(page === 0){
            return classes.displayLeft
        }else if(page === 1){
            return classes.mask
        }else{
            return false
        }
    }

    return (
        rendering() ? (
            <div className={rendering()}>
                <div className={page % 2 ? classes.whiteLeft : classes.whiteRight}>
                    <Start/>
                </div>
            </div>
        ):(
            <div></div>
        )
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);