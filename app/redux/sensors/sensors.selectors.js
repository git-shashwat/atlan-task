import { createSelector } from 'reselect';
import { filterSensorDataByTag } from './sensors.utils';

export const selectSensors = state => state.sensors;

export const selectSensorsData = createSelector(
    [selectSensors],
    sensors => sensors.data
);

export const selectIsFetchingData = createSelector(
    [selectSensors],
    sensors => sensors.isFetching
);

export const selectSensorsError = createSelector(
    [selectSensors],
    sensors => sensors.errorMessage
);

export const selectIsSensorsLoaded = createSelector(
    [selectSensors],
    sensors => !!sensors.data
);

export const selectSensorAlert = createSelector(
    [selectSensors],
    sensors => sensors.alert
);
