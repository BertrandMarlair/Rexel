import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core";
import ElectricNetworkStyle from "./ElectricNetworkStyle";
import { useTranslation } from 'react-i18next';
import Title from 'component/Typography/Title';
import Text from 'component/Typography/Normal';
import Button from "component/CustomButtons/Button";
import Select from "component/CustomInput/Select";
import { useSelector, useDispatch } from 'react-redux';
import Input from "component/CustomInput/Input";
import { NavLink } from 'react-router-dom';
import MediaQuery from "react-responsive";

const ElectricNetwork = props => {
    const networkConfig = useSelector(state => state.networkConfig)
    const contextConfig = useSelector(state => state.contextConfig)
    const dispatch = useDispatch()

    const targetType = (payload) => dispatch({ type: 'EDIT_NETWORK_TYPE', payload })
    const targetIntesityRaccord = (payload) => dispatch({ type: 'EDIT_NETWORK_RACCORD', payload })
    const targetIntesityMax = (payload) => dispatch({ type: 'EDIT_NETWORK_INTENSITY', payload })
    
    const { classes, page } = props
    const { type, raccord, intensityMax, kw } = networkConfig.network
    const { installation, bornes, cars } = contextConfig
    
    useEffect(() => {
        const targetKw = (payload) => dispatch({ type: 'EDIT_NETWORK_KW', payload })
        const intensity = type.intensity[type.intensity.findIndex(x => x.id === type.target)];
        if (intensity) {
            const calcul = {
                tension: intensity.tension,
                intensity: parseInt(intensityMax),
                phase: intensity.monophase ? 1 : Math.sqrt(3)
            }
            if (calcul.tension && calcul.intensity && calcul.phase) {
                const res = calcul.tension * calcul.intensity * calcul.phase / 1000
                if (res !== kw) targetKw(res)
            }
        }
    }, [type, raccord, intensityMax, kw, dispatch])

    const { t } = useTranslation();

    function isSelectType(type, taget){
        if (type === taget){
            return "secondary"
        }else {
            return "unselect"
        }
    }

    function handleSelectIntensityRaccord(e) {
        targetIntesityRaccord(e.target.value);
    }

    function handleChangeIntensityMax(e) {
        if(raccord === '>125'){
            if (e.target.value > 0){
                targetIntesityMax(e.target.value);
            }
        }else{
            if (e.target.value <= parseInt(raccord) && e.target.value > 0){
                targetIntesityMax(e.target.value);
            }
        }
    }

    function displayCars() {
        if (installation.target === 'resident') {
            if (installation.type.resident.target === 0 || installation.type.resident.target === 1) {
                if (bornes.simple.target === 0 && bornes.double.target === null) {
                    return true
                }
            }
        }
        if (installation.target === 'enterprise') {
            if (installation.type.enterprise.target === 0) {
                if (bornes.simple.target === 0 && bornes.double.target === null) {
                    return true
                }
            }
        }
        return false
    }

    function displayNextPage(){
        let displayNext = null;
        if (page === 1 && installation.target) {
            if (installation.type[installation.target].target !== null) {
                if (displayCars()) {
                    if (cars.modelCar !== null && cars.carSelect !== null) {
                        displayNext = true
                    }else {
                        return false
                    }
                } else {
                    if (bornes.simple.target !== null || bornes.double.target !== null) {
                        displayNext = true
                    }else {
                        return false
                    }
                }
            }
        }
        if (type.target) displayNext = true
        else return false
        if (raccord && raccord !== "") displayNext = true
        else return false
        if (intensityMax && intensityMax !== "") displayNext = true
        else return false
        if (kw && kw > 0) displayNext = true
        else return false

        return displayNext
    }

    return (
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <h5 className={classes.type}>{t('configurator.network.title')}</h5>
                <Title>{t('configurator.network.type')}</Title>
                <div className={classes.typeButton}>
                    {type && type.intensity.map((typeIntensity, index) => (
                        <div key={`type${index}`} className={classes.button}>
                            <Button fullWidth big color={isSelectType(typeIntensity.id, type.target)} onClick={() => targetType(typeIntensity.id)}>
                                {typeIntensity.name}
                            </Button>
                        </div>
                    ))}
                </div>
                <Text>{t('configurator.network.typeDescription')}</Text>
                <Title>{t('configurator.network.raccord')}</Title>
                <div className={classes.container}>
                    <div className={classes.item}>
                        <Text>{t('configurator.network.raccordDescription')}</Text>
                    </div>
                    <div className={classes.item}>
                        <Select value={raccord} className={classes.select} onChange={(e) => handleSelectIntensityRaccord(e)} >
                            <option value="">{t('configurator.network.raccordInput')}</option>
                            <option value="16">16A</option>
                            <option value="25">25A</option>
                            <option value="32">32A</option>
                            <option value="40">40A</option>
                            <option value="50">50A</option>
                            <option value="64">64A</option>
                            <option value="80">80A</option>
                            <option value="100">100A</option>
                            <option value="125">125A</option>
                            <option value=">125">>125A</option>
                        </Select>
                    </div>
                </div>
                <Title>{t('configurator.network.intensityMax')}</Title>
                <div className={classes.container}>
                    <div className={classes.item}>
                        <Text>{t('configurator.network.intensityMaxDescriotion')}</Text>
                    </div>
                    <div className={classes.item}>
                        <Input type='number' value={intensityMax} onChange={(e) => handleChangeIntensityMax(e)} className={classes.select} />
                        <div className={classes.calcul}>
                            <span>Puiss. Disp.</span>
                            <span>{kw && kw.toFixed(2) + ' KW'}</span>
                        </div>
                    </div>
            </div>
            </div>
            <div className={classes.goodToKnow}>
                <div className={classes.goodToKnowTitle}>
                    <Title white>{t('configurator.network.GoodtoKnow')}</Title>
                </div>
                <Text white>{t('configurator.network.GoodtoKnowDescription')}</Text>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.navigationBottom}>
                    <div></div>
                    <MediaQuery maxWidth={960}>
                        <NavLink to={"1"}>
                            <Button>{t('global.prev')}</Button>
                        </NavLink>
                    </MediaQuery>
                    {displayNextPage() ? (
                        <NavLink to={"3"}>
                            <Button color="primary">{t('global.next')}</Button>
                        </NavLink>
                    ): (
                        <Button disabled color="primary">{t('global.next')}</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default withStyles(ElectricNetworkStyle)(ElectricNetwork);