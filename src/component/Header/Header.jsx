import React from 'react';
import { withStyles, Icon } from '@material-ui/core';
import HeaderStyle from './HeaderStyle';
import { useTranslation } from 'react-i18next';
import Button from "../CustomButtons/Button";

const Header = props => {
    const { classes } = props
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src="/images/logo/rexel.png" alt="company logo" />
                </div>
                <div>
                    <Button color="dark" onClick={() => changeLanguage('fr')}>fr</Button>
                    <Button color="dark" onClick={() => changeLanguage('nl')}>nl</Button>
                    <Button icon color="primary"><Icon>menu</Icon>{t('header.list')}</Button>
                    <Button icon color="secondary"><Icon>shopping_cart</Icon>0€</Button>
                </div>
            </div>
        </div>
    )
}

export default withStyles(HeaderStyle)(Header);