
export const parseResourseCityName = description => {
    let subpattern = "Historical monthly data for meteorological station ";
    return description.substring(subpattern.length);
};
export const parseCityDetails = cityDetails => {
    let stringArray = cityDetails.split("\n");

    let latIndex = stringArray[1].indexOf("Lat") + 3;
    let lonIndex = stringArray[1].indexOf("Lon") + 3;

    var lat = Number.parseFloat(stringArray[1].substring(latIndex, latIndex + 7));
    var lon = Number.parseFloat(stringArray[1].substring(lonIndex, lonIndex + 7));

    let data = [];

    for (let i = 7; i < stringArray.length; i++) {
        let addressString = stringArray[i].replace(/ /g, "~");
        if (addressString == "") {
            continue;
        }

        let [yyyy, mm, tmax, tmin, afDay, rainM, sunHours] = addressString.match(/[^~]+/g);

        let year = (yyyy == "---") ? (year = 0) : Number.parseFloat(yyyy);
        let mounth = (mm == "---") ? (mounth = 0) : Number.parseFloat(mm);
        let maxtemperature = (tmax == "---") ? (maxtemperature = 0) : Number.parseFloat(tmax);
        let mintemperature = (tmin == "---") ? (mintemperature = 0) : Number.parseFloat(tmin);
        let daysOfAirFrost = (afDay == "---") ? (daysOfAirFrost = 0) : Number.parseFloat(afDay);
        let rainfall = (rainM == "---") ? (rainfall = 0) : Number.parseFloat(rainM);
        let sunshine = (sunHours == "---") ? (sunshine = 0) : sunshine = Number.parseFloat(sunHours);

        data.push({
            year, mounth, maxtemperature, mintemperature, daysOfAirFrost, sunshine, rainfall
        });
    }

    return {
        lat,
        lon,
        data
    };
}
