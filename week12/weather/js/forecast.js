import Dom from "./dom.js";
import currentForecast from "./current.js";
export default class Forecast {
  constructor(city) {
    this.city = city;
    this.apiKey = "7ad77003b89dc636eaf0b618d0f305fb";
  }

  cityForecast() {
    let forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}`;

    let forecastDays;
    fetch(forcastUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let lon = data.city.coord.lon;
        let lat = data.city.coord.lat;

        forecastDays = this.daillyForcast(lat, lon);

        console.log(data);
      });
    return forecastDays;
  }
  daillyForcast(lat, lon) {
    let part = "minutely,hourly,alerts";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${this.apiKey}&units=metric`;
    let forecastCurrent;
    let forecastDays;
    fetch(forecastUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        forecastDays = data.daily.forEach(this.displayDay);
        let current = new currentForecast(data.current, this.city);
        forecastCurrent = current.currentForecast();
        console.log(data);
      });
    return forecastDays;
  }
  displayDay(days) {
    let dailyForecast = new Dom(days);
    let forecastDays = dailyForecast.buildFiveDaysForecast();
    return forecastDays;
  }
}
