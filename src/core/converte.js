"use stcrict";
import {
    parseResourseCityName,
    parseCityDetails
} from "./parse";



export const convertCityName = responceList => {
    if (!responceList & !responceList.resources) {
        return;
    }
    let result = [];

    responceList.resources.forEach(resource => {
        if (!resource.url.endsWith(".txt")) {
            return;
        };

        var name = parseResourseCityName(resource.description);

        result.push({
            name,
            url: resource.url
        });
    });

    return result;
};

const mergeYearSummary = (firstYearSummary, secondYearSummary, firstCount, secondCount) => {
    return {
        maxTemp: firstYearSummary.maxTemp > secondYearSummary.maxTemp ? firstYearSummary.maxTemp : secondYearSummary.maxTemp,
        minTemp: firstYearSummary.maxTemp < secondYearSummary.maxTemp ? firstYearSummary.maxTemp : secondYearSummary.maxTemp,
        daysOfAirFrost: firstYearSummary.daysOfAirFrost + secondYearSummary.daysOfAirFrost,
        sunshine: firstYearSummary.sunshine + firstYearSummary.sunshine,
        rainfall: firstYearSummary.rainfall + firstYearSummary.rainfall,
    };
};

const mergeMaxTemperature = (firstMaxTempm, secondMaxTemp) => {
    return {
        xValues: [].concat(firstMaxTempm.xValues, secondMaxTemp.xValues),
        yValues: [].concat(firstMaxTempm.yValues, secondMaxTemp.yValues)
    };
};

const mergeMinTemperature = (firstMinTempm, secondMinTemp) => {
    return {
        xValues: [].concat(firstMinTempm.xValues, secondMinTemp.xValues),
        yValues: [].concat(firstMinTempm.yValues, secondMinTemp.yValues)
    };
};

const mergeRainFall = (firstRainFall, secondRainFall) => {
    return {
        xValues: [].concat(firstRainFall.xValues, secondRainFall.xValues),
        yValues: [].concat(firstRainFall.yValues, secondRainFall.yValues)
    };
};

const mergeSunShine = (firstSunShinel, secondSunShine) => {
    return {
        xValues: [].concat(firstSunShinel.xValues, secondSunShine.xValues),
        yValues: [].concat(firstSunShinel.yValues, secondSunShine.yValues)
    };
};


const mergeDaysOfAirFrost = (firstDaysOfAirFrost, secondDaysOfAirFrost) => {
    return {
        xValues: [].concat(firstDaysOfAirFrost.xValues, secondDaysOfAirFrost.xValues),
        yValues: [].concat(firstDaysOfAirFrost.yValues, secondDaysOfAirFrost.yValues)
    };
};



const mergeYearDetails = (firstYearDetails, secondYearDetails) => {
    let yearsSummary = mergeYearSummary(firstYearDetails.yearsSummary, secondYearDetails.yearsSummary);
    let maxTemperature = mergeMaxTemperature(firstYearDetails.maxTemperature, secondYearDetails.maxTemperature);
    let minTemperature = mergeMinTemperature(firstYearDetails.minTemperature, secondYearDetails.minTemperature);
    let rainFall = mergeRainFall(firstYearDetails.rainFall, secondYearDetails.rainFall);
    let sunShine = mergeSunShine(firstYearDetails.sunShine, secondYearDetails.sunShine);
    let daysOfAirFrost = mergeDaysOfAirFrost(firstYearDetails.daysOfAirFrost, secondYearDetails.daysOfAirFrost);

    return {
        yearsSummary,
        maxTemperature,
        minTemperature,
        rainFall,
        daysOfAirFrost,
        sunShine
    }
};

export const convertCityDetailsResponse = cityDetailsResponse => {
    let cityDetails = parseCityDetails(cityDetailsResponse);

    let data = {};

    for (let i = 0; i < cityDetails.data.length; i++) {
        let nextDetails = cityDetails.data[i];
        var yearDetails = {
            count: 1,
            yearsSummary: {
                mm: nextDetails.mounth,
                maxTemp: nextDetails.maxtemperature,
                minTemp: nextDetails.mintemperature,
                daysOfAirFrost: nextDetails.daysOfAirFrost,
                sunshine: nextDetails.sunshine,
                rainfall: nextDetails.rainfall
            },
            maxTemperature: {
                xValues: [nextDetails.mounth],
                yValues: [nextDetails.maxtemperature]
            },

            minTemperature: {
                xValues: [nextDetails.mounth],
                yValues: [nextDetails.mintemperature]
            },

            rainFall: {
                xValues: [nextDetails.mounth],
                yValues: [nextDetails.rainfall]
            },

            daysOfAirFrost: {
                xValues: [nextDetails.mounth],
                yValues: [nextDetails.daysOfAirFrost]
            },

            sunShine: {
                xValues: [nextDetails.mounth],
                yValues: [nextDetails.sunshine]
            },

        }
        if (data[nextDetails.year]) {
            data[nextDetails.year] = mergeYearDetails(data[nextDetails.year], yearDetails);
        } else {
            data[nextDetails.year] = yearDetails;
        }
    };


    let details = {
        coordinates: {
            lat: cityDetails.lon,
            lon: cityDetails.lat
        },
        data
    }
    console.log(details);
    return details;
};

