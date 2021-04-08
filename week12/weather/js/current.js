export default class Current {
  constructor(data, city) {
    this.data = data;
    this.city = city;
  }

  currentForecast() {
    const iconImg = document.getElementById("weather-icon");
    const loc = document.querySelector("#location");
    const tempC = document.querySelector(".c");
    const tempF = document.querySelector(".f");
    const desc = document.querySelector(".desc");
    const sunriseDOM = document.querySelector(".sunrise");
    const sunsetDOM = document.querySelector(".sunset");

    let data = this.data;
    const temp = data.temp;
    const place = this.city;
    const { description, icon } = data.weather[0];
    const sunrise = data.sunrise;
    const sunset = data.sunset;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const fahrenheit = (temp * 9) / 5 + 32;

    // Converting Epoch(Unix) time to GMT
    const sunriseGMT = new Date(sunrise * 1000);
    const sunsetGMT = new Date(sunset * 1000);

    // Interacting with DOM to show data
    iconImg.src = iconUrl;
    loc.textContent = `${place}`;
    desc.textContent = `${description}`;
    tempC.textContent = `${temp.toFixed(2)} °C`;
    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
    sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
    sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
  }
}
