import React, { Fragment, useState } from 'react';
import { withStyles } from "@material-ui/core";
import ContextStyle from "./ContextStyle";
import { secondaryColor, whiteColor } from 'style/constant';
import Select from "component/CustomInput/Select";
import { useTranslation } from 'react-i18next';
import Title from 'component/Typography/Title';
import Text from 'component/Typography/Normal';
// import ChevronLeft from '@material-ui/icons/ChevronLeft'
// import ChevronRight from '@material-ui/icons/ChevronRight'
// import SwipeableViews from 'react-swipeable-views';

const Cars = props => {
    const { classes } = props

    const [modelCar, setModelCar] = useState(null);
    const [carSelect, setCarSelect] = useState(null);
     // const [activeStepCars, setActiveStepCars] = useState(0);
    // const maxSteps = getCars.length;

    // function handleStepChangeCars(step) {
    //     setActiveStepCars(step);
    // }

    // function handleNextCars() {
    //     setActiveStepCars(prevActiveStep => prevActiveStep + 1);
    // }

    // function handleBackCars() {
    //     setActiveStepCars(prevActiveStep => prevActiveStep - 1);
    // }


    function handleSelectCar(index) {
        setCarSelect(index === carSelect ? null : index);
        setModelCar(null);
    }

    function handleSelectModel(e) {
        setModelCar(e.target.value);
    }

    function renderCarsModel(index) {
        const car = getCars[getCars.findIndex(car => car.id === index)]
        return (
            car.model.map((model, index) => (
                <option key={`modal/${index}`} value={model.name}>{model.name}</option>
            ))
        )
    }

    const { t } = useTranslation();

    return (
        <Fragment>
            <Title white>{t('configurator.context.cars')}</Title>
            <div className={classes.cars}>
                {/* <ChevronLeft className={classes.icon} onClick={() => handleBackCars()} />
                    <SwipeableViews
                        index={activeStepCars}
                        onChangeIndex={handleStepChangeCars}
                        enableMouseEvents
                    >
                        {getCars.slice(0, Math.round(getCars.length / 2) + 1).map((car, indexSlide) => (
                            <div key={`carSlide/${indexSlide}`} className={classes.carsSelect}>
                                {getCars.slice(Math.round(6 * indexSlide), Math.round(6 * (indexSlide + 1))).map((car, indexCar) => (
                                    <div key={`carSlide/${indexCar}`} className={classes.car} onClick={() => handleSelectCar(car.id)} style={{ backgroundColor: car.id === carSelect ? secondaryColor : whiteColor }}>
                                        <div className={classes.carImage} style={{ backgroundImage: `url(/images/cars/${car.url})` }} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </SwipeableViews>
                <ChevronRight className={classes.icon} onClick={() => handleNextCars()} /> */}
                <div className={classes.carsSelectAll}>
                    {getCars.map((car, indexCar) => (
                        <div key={`carSlide/${indexCar}`} className={classes.car} onClick={() => handleSelectCar(car.id)} style={{ backgroundColor: car.id === carSelect ? secondaryColor : whiteColor }}>
                            <div className={classes.carImage} style={{ backgroundImage: `url(/images/cars/${car.url})` }} />
                        </div>
                    ))}
                </div>
            </div>
            {carSelect !== null &&
                <div className={classes.carSelect}>
                    <Select onChange={(e) => handleSelectModel(e)} className={classes.select}>
                        <option value="">{t('configurator.context.select')}</option>
                        {renderCarsModel(carSelect)}
                    </Select>
                    <div className={classes.carSelectInfos}>
                        {modelCar &&
                            <Fragment>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.prise')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{modelCar}</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.courantAc')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{modelCar}</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.chargeDC')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{modelCar}</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.battery')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{modelCar}</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.tensionAC')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{modelCar}</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.chargeAC')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{modelCar}</Text>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default withStyles(ContextStyle)(Cars);

const getCars = [
    {
        id: 0,
        url: 'audi.png',
        type: 'audi',
        model: [
            { name: "audi1" },
            { name: "audi2" },
            { name: "audi3" },
            { name: "audi4" },
            { name: "audi5" },
            { name: "audi6" },
        ]
    },
    {
        id: 1,
        url: 'bmw.png',
        type: 'bmw',
        model: [
            { name: "bmw1" },
            { name: "bmw2" },
            { name: "bmw3" },
            { name: "bmw4" },
            { name: "bmw5" },
            { name: "bmw6" },
        ]
    },
    {
        id: 2,
        url: 'mercedes.png',
        type: 'mercedes',
        model: [
            { name: "mercedes1" },
            { name: "mercedes2" },
            { name: "mercedes3" },
            { name: "mercedes4" },
            { name: "mercedes5" },
            { name: "mercedes6" },
        ]
    },
    {
        id: 3,
        url: 'nissan.png',
        type: 'nissan',
        model: [
            { name: "nissan1" },
            { name: "nissan2" },
            { name: "nissan3" },
            { name: "nissan4" },
            { name: "nissan5" },
            { name: "nissan6" },
        ]
    },
    {
        id: 4,
        url: 'renault.png',
        type: 'renault',
        model: [
            { name: "renault1" },
            { name: "renault2" },
            { name: "renault3" },
            { name: "renault4" },
            { name: "renault5" },
            { name: "renault6" },
        ]
    },
    {
        id: 5,
        url: 'tesla.png',
        type: 'tesla',
        model: [
            { name: "tesla1" },
            { name: "tesla2" },
            { name: "tesla3" },
            { name: "tesla4" },
            { name: "tesla5" },
            { name: "tesla6" },
        ]
    },
    {
        id: 6,
        url: 'volvo.png',
        type: 'volvo',
        model: [
            { name: "volvo1" },
            { name: "volvo2" },
            { name: "volvo3" },
            { name: "volvo4" },
            { name: "volvo5" },
            { name: "volvo6" },
        ]
    },
    {
        id: 7,
        url: 'astonmartin.png',
        type: 'astonmartin',
        model: [
            { name: "astonmartin1" },
            { name: "astonmartin2" },
            { name: "astonmartin3" },
            { name: "astonmartin4" },
            { name: "astonmartin5" },
            { name: "astonmartin6" },
        ]
    },
    {
        id: 8,
        url: 'byd.png',
        type: 'byd',
        model: [
            { name: "byd1" },
            { name: "byd2" },
            { name: "byd3" },
            { name: "byd4" },
            { name: "byd5" },
            { name: "byd6" },
        ]
    },
    {
        id: 9,
        url: 'chevrolet.png',
        type: 'chevrolet',
        model: [
            { name: "chevrolet1" },
            { name: "chevrolet2" },
            { name: "chevrolet3" },
            { name: "chevrolet4" },
            { name: "chevrolet5" },
            { name: "chevrolet6" },
        ]
    },
    {
        id: 10,
        url: 'citroen.png',
        type: 'citroen',
        model: [
            { name: "citroen1" },
            { name: "citroen2" },
            { name: "citroen3" },
            { name: "citroen4" },
            { name: "citroen5" },
            { name: "citroen6" },
        ]
    },
    {
        id: 11,
        url: 'fisker.png',
        type: 'fisker',
        model: [
            { name: "fisker1" },
            { name: "fisker2" },
            { name: "fisker3" },
            { name: "fisker4" },
            { name: "fisker5" },
            { name: "fisker6" },
        ]
    },
    {
        id: 12,
        url: 'ford.png',
        type: 'ford',
        model: [
            { name: "ford1" },
            { name: "ford2" },
            { name: "ford3" },
            { name: "ford4" },
            { name: "ford5" },
            { name: "ford6" },
        ]
    },
    {
        id: 13,
        url: 'vw.png',
        type: 'vw',
        model: [
            { name: "vw1" },
            { name: "vw2" },
            { name: "vw3" },
            { name: "vw4" },
            { name: "vw5" },
            { name: "vw6" },
        ]
    }
];
