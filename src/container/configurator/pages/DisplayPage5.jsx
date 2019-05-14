import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"
import { useTranslation } from 'react-i18next';

const DisplayPage = props => {
    const { page, classes } = props

    const { t } = useTranslation();

    const rendering = () => {
        if (page === 2) {
            return classes.prepared
        } else if (page === 3) {
            return classes.displayRigth
        } else {
            return false
        }
    }

    return (
        rendering() ? (
            <div className={rendering()}>
                <div className={page % 2 ? classes.whiteRight : classes.whiteLeft}>
                    <h1>Page 5</h1>
                    <p>{t('title')}</p>
                    <h2>Page: {page}</h2>
                    <Link to={"2"}>prev</Link>
                </div>
            </div>
        ):(
            <div className={classes.prepared}></div>
        )
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);