const daysOfWeekMap = {
  0: "SUN",
  1: "MON",
  2: "TUES",
  3: "WED",
  4: "THUR",
  5: "FRI",
  6: "SAT",
};

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  "partly-cloudy": { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

let WeatherData;
let dailyWeather = [],
  dailyTemp = [],
  dailyRainPercentage = [],
  dailyPressure = [];
fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=44&lon=26&units=metric&exclude=current,minutely,hourly,alerts&appid=6279e629c6a1d96576c39d7b3d72be95"
)
  .then((res) => res.json())
  .then((data) => {
    WeatherData = data;
    // console.log(WeatherData);
    let dailyData = WeatherData.daily;
    console.log(dailyData);
    dailyData.forEach((d, index) => {
      dailyWeather[index] = d.weather[0].main;
      dailyTemp[index] = d.temp.day.toFixed();
      dailyRainPercentage[index] = (d.pop * 10).toFixed();
      dailyPressure[index] = d.pressure;
    });
    //console.log(dailyWeather);
    console.log(dailyTemp);
    console.log(dailyRainPercentage);
    console.log(dailyPressure);
  });
