import React from 'react'
import DisplayPage1 from './pages/DisplayPage1'
import DisplayPage2 from './pages/DisplayPage2'
import DisplayPage3 from './pages/DisplayPage3'
import DisplayPage4 from './pages/DisplayPage4'
import DisplayPage5 from './pages/DisplayPage5'
import DisplayError from './pages/DisplayError'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from './ConfiguratorStyle'

const Display = props => {

    const { page, classes } = props

    const pages = [
        {'display':  DisplayPage1},
        {'display':  DisplayPage2},
        {'display':  DisplayPage3},
        {'display':  DisplayPage4},
        {'display':  DisplayPage5},
    ]

    return (
        <div className={classes.scene}>
            {!isNaN(parseInt(page) % 1) ? (
                pages.map((Page, index) => (
                    <Page.display key={`page${index}`} page={parseInt(page)} />
                ))
            ):(
                <DisplayError/>
            )}
        </div>
    )
}

export default withStyles(ConfiguratorStyle)(Display)