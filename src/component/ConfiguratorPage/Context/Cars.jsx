import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import ContextStyle from './ContextStyle'
import { secondaryColor, whiteColor } from '../../../style/constant'
import Select from '../../../component/CustomInput/Select'
import Title from '../../../component/Typography/Title'
import Text from '../../../component/Typography/Normal'

const Cars = props => {
    const { classes } = props

    const [ cars, setCars ] = useState([])

    const contextConfig = useSelector(state => state.contextConfig)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:8888/api/meteoGetData.php').then((res) => {
            setCars(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const { modelCar, carSelect } = contextConfig.cars
    
    const targetModelCar = (payload) => dispatch({ type: 'SELECT_MODEL', payload })
    const targetCarSelect = (payload) => dispatch({ type: 'SELECT_CAR', payload })

    function handleSelectCar(index) {
        targetCarSelect(index === carSelect ? null : index)
        targetModelCar(null)
    }

    function handleSelectModel(e) {
        targetModelCar(e.target.value)
    }

    function selectCarModel(modelType) {
        const index = cars.findIndex(car => car.TYPE === modelType)
        return cars[index]
    }

    function renderCarsModel(selectId) {
        const index = cars.findIndex(car => car.ID === selectId)
        if(index >= 0){
            const selectedMark = cars[index].MARK
            return (
                cars && cars.map((car, index) => {
                    if (car.MARK === selectedMark){
                        return (
                            <option key={`modal/${index}`} value={car.TYPE}>{car.TYPE}</option>
                        )
                    }else{
                        return null
                    }
                })
            )
        }
    }

    function getCarsModel(){
        let models = [] 
        if (cars && cars.length > 0){
            cars.forEach(car => {
                const index = models.findIndex(model => model.mark === car.MARK)
                if(car && index === -1){
                    models.push({
                        id: car.ID,
                        mark: car.MARK,
                        url: `${car.MARK}.png`,
                    })
                }
            })
        }
        return models
    }

    const { t } = useTranslation()
    const selectCar = selectCarModel(modelCar)
    return (
        <Fragment>
            <Title white>{t('configurator.context.cars')}</Title>
            <div className={classes.cars}>
                <div className={classes.carsSelectAll}>
                    {getCarsModel().map((car, indexCar) => (
                        <div key={`carSlide/${indexCar}`} className={classes.car} onClick={() => handleSelectCar(car.id)} style={{ backgroundColor: car.id === carSelect ? secondaryColor : whiteColor }}>
                            <div className={classes.carImage} style={{ backgroundImage: `url(/images/cars/${car.url.replace(/ /g, '')})` }} />
                        </div>
                    ))}
                </div>
            </div>
            {carSelect !== null &&
                <div className={classes.carSelect}>
                    <Select value={modelCar ? modelCar : ''} onChange={(e) => handleSelectModel(e)} className={classes.select}>
                        <option value="">{t('configurator.context.select')}</option>
                        {renderCarsModel(carSelect)}
                    </Select>
                    <div className={classes.carSelectInfos}>
                        {selectCar &&
                            <Fragment>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.prise')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{selectCar.CONNECTOR}</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.courantAc')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{selectCar.AC_CURRENT} A</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.chargeDC')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{selectCar.FASTCHARGING_DC}</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.battery')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{selectCar.BATTERY_CAPACITY} KWH</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.tensionAC')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{selectCar.AC_VOLTAGE} V</Text>
                                    </div>
                                </div>
                                <div className={classes.settings}>
                                    <div className={classes.settingsModel}>
                                        <Text white>{t('configurator.context.chargeAC')}: </Text>
                                    </div>
                                    <div className={classes.settingsModelValue}>
                                        <Text>{selectCar.FASTCHARGING_AC}</Text>
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

export default withStyles(ContextStyle)(Cars)