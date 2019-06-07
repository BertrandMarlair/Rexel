import React from "react";
import { withStyles } from "@material-ui/core";
import StartStyle from "./StartStyle";
import { useTranslation } from 'react-i18next';
import SettingsIcon from '@material-ui/icons/SettingsInputComponent'
import Arrow from '@material-ui/icons/ArrowForward'
import { NavLink } from "react-router-dom"

const Start = props => {

    const { classes } = props

    const { t } = useTranslation();
    return (
        <div className={classes.main}>
            <div className={classes.iconTop}><SettingsIcon className={classes.icon}/></div>
            <h2 className={classes.title}>{t('configurator.start.title')}</h2>
            <h5 className={classes.description}>{t('configurator.start.description')}</h5>
            <h5 className={classes.type}>{t('configurator.start.type')}</h5>
            <div className={classes.iconLink}>
                <NavLink to={'1'}>
                    <Arrow className={classes.iconLast}/>
                </NavLink>
            </div>
        </div>
    )
}

export default withStyles(StartStyle)(Start);