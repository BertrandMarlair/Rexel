import React from "react";
import { withStyles } from "@material-ui/core";
import ContextStyle from "./ContextStyle";
import { useTranslation } from 'react-i18next';
import Title from 'component/Typography/Title';
import Text from 'component/Typography/Normal';
import Button from "component/CustomButtons/Button";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import RadioUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import RadioChecked from '@material-ui/icons/RadioButtonChecked'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Cars from './Cars';

const Context = props => {
    const contextConfig = useSelector(state => state.contextConfig)
    const dispatch = useDispatch()
    console.log(contextConfig)
    console.log(dispatch)
    
    const steps = getSteps();
    
    const targetInstall = (payload) => dispatch({ type: 'EDIT_INSTALLATION_TARGET', payload })
    const targetApplication = (typeName, applicationId) => dispatch({ type: 'EDIT_APPLICATION_TARGET', payload: { typeName, applicationId} })
    const targetBorneSimple = (payload) => dispatch({ type: 'EDIT_BORNE_SIMPLE', payload })
    const targetBorneDouble = (payload) => dispatch({ type: 'EDIT_BORNE_DOUBLE', payload })
    const restoreState = () => dispatch({ type: 'RESTORE' })
    
    const { t } = useTranslation();
    const { classes, page } = props
    const { installation, bornes } = contextConfig

    function handleSelectSimple(index) {
        const newTarget = index === bornes.simple.target ? null : index
        targetBorneSimple(newTarget)
    }

    function handleSelectDouble(index) {
        const newTarget = index === bornes.double.target ? null : index;
        targetBorneDouble(newTarget)
    }

    let type = [];
    for (let i in installation.type) {
        if (installation.type[i].name === installation.target) {
            type = installation.type[i];
        };
    };
    
    function isTargetInstall(type){
        if(type === contextConfig.installation.target){
            return 'secondary'
        }
    }

    function isTargetApplication(type, applicationId){
        if (type === applicationId){
            return 'secondary'
        }
    }

    function displayCars(){
        if (installation.target === 'resident'){
            if (bornes.simple.target === 0 && bornes.double.target === null){
                return true
            }
        }
        if (installation.target === 'enterprise'){
            if (installation.type.enterprise.target === 0){
                if (bornes.simple.target === 0 && bornes.double.target === null){
                    return true
                }
            }
        }
        return false
    }

    function displayNextPage(){
        console.log(page)
        if (page === 0 && installation.target){
            if (installation.type[installation.target].target !== null){
                if (displayCars()){
                    // if(checkCarsComplete){

                    // }
                    return false
                }else{
                    if (bornes.simple.target !== null || bornes.double.target !== null) {
                        return true
                    }
                }
            }
        }
        return false
    }
    
    return (
        <div className={classes.main}>
            <div>
                <Title white>{t('configurator.context.type')}</Title>
                <div className={classes.buttonContainer}>
                    {Object.keys(installation.type).map((context, index) => {
                        const install = installation.type[context]
                        return (
                            <div key={`install${index}`} className={classes.button}>
                                <Button fullWidth big color={isTargetInstall(install.name)} onClick={() => targetInstall(install.name)}>
                                    {t(`configurator.context.${install.name}`)}
                                </Button>
                            </div>
                        )
                    })}
                </div>
                <Title white>{t('configurator.context.application')}</Title>
                <div className={classes.buttonContainer}>
                    {type.application ? type.application.map((application, index) => (
                        <div className={classes.button} key={`application${index}`}>
                            <Button fullWidth big color={isTargetApplication(type.target, application.id)} onClick={() => targetApplication(type.name, application.id)}>
                                {t(`configurator.context.${application.name}`)}
                            </Button>
                        </div>
                    )): (
                        <Text white centered>Select a installation type</Text>
                    )}
                </div>
                <Text white>{t('configurator.context.applicationDescription')}</Text>
                <Title white>{t('configurator.context.number')}</Title>
                <div className={classes.stepper}>
                    <div className={classes.borne}>
                        <img src="/images/simpleBorneWhite.svg" alt="borne simple" />
                    </div>
                    <Stepper activeStep={bornes.simple.target} className={classes.numberTarget} alternativeLabel nonLinear>
                        {steps.map((label, index) => {
                            const labelProps = {};
                            labelProps.icon = index === bornes.simple.target ? <RadioChecked className={classes.icon} /> : <RadioUnchecked className={classes.icon} />;
                            return (
                                <Step key={label} onClick={() => handleSelectSimple(index)}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </div>
                <div className={classes.stepper}>
                    <div className={classes.borne}>
                        <img src="/images/doubleBorneWhite.svg" alt="borne double" />
                    </div>
                    <Stepper activeStep={bornes.double.target} className={classes.numberTarget} alternativeLabel nonLinear>
                        {steps.map((label, index) => {
                            const labelProps = {};
                            labelProps.icon = index === bornes.double.target ? <RadioChecked className={classes.icon} /> : <RadioUnchecked className={classes.icon} />;
                            return (
                                <Step key={label} onClick={() => handleSelectDouble(index)}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </div>
                <Text white>{t('configurator.context.numberDescription1')}<br />{t('configurator.context.numberDescription2')}</Text>
                {displayCars() &&
                    <Cars/>
                }
            </div>
            <div className={classes.navigationBottom}>
                <Button onClick={() => restoreState()} color="transparent">{t('configurator.context.clear')}</Button>
                {displayNextPage() &&
                    <NavLink to={"1"}>
                        <Button color="white">{t('configurator.context.next')}</Button>
                    </NavLink>
                }
            </div>
        </div>
    )
}

export default withStyles(ContextStyle)(Context);

function getSteps() {
    return ['1', '2', '3', '4'];
}