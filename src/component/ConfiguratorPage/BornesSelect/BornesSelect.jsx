import React from 'react'
import BornesStyle from './BornesStyle'
import { withStyles } from '@material-ui/styles'
import Title from 'component/Typography/Title'
import { useTranslation } from 'react-i18next';
import SettingsIcon from '@material-ui/icons/SettingsInputComponent'

const BornesSelect = props => {
    const { classes } = props
    const { t } = useTranslation();

    return (
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <h5 className={classes.title}>{t('configurator.bornes.title')}</h5>
                <div className={classes.emplacement}>
                    <SettingsIcon className={classes.icon} />
                    <Title>{t('configurator.bornes.type')}</Title>
                </div>
            </div>
        </div>
    )
}

export default withStyles(BornesStyle)(BornesSelect)