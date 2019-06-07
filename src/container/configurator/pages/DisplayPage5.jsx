import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import ConfiguratorStyle from "../ConfiguratorStyle"
import { useTranslation } from 'react-i18next';
import MediaQuery from "react-responsive";
import BornesConfig from 'component/ConfiguratorPage/BornesConfig/BornesConfig';

const DisplayPage = props => {
    const { page, classes } = props

    const { t } = useTranslation();

    const rendering = responsive => {
        if (responsive) {
            if (page === 4) return true
            return false
        }
        if (page === 1) {
            return classes.prepared
        } else if (page === 2) {
            return classes.prepared
        } else if (page === 3) {
            return classes.displayRigth
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
                        <div className={classes.blueSide}>
                            <BornesConfig />
                        </div>
                    </div>
                ):(
                    <div className={classes.prepared}></div>
                )}
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                {rendering(true) ? (
                    <div className={classes.blueSide}>
                        <h1>Page 5</h1>
                        <p>{t('title')}</p>
                        <h2>Page: {page}</h2>
                        <Link to={"2"}>prev</Link>
                    </div>
                ) : (
                    <div></div>
                )}
            </MediaQuery>
        </Fragment>
    )
}

export default withStyles(ConfiguratorStyle)(DisplayPage);