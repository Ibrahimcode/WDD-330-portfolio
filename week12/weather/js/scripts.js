import Forecast from "./forecast.js";

// Current
const current = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

const api = "7ad77003b89dc636eaf0b618d0f305fb"; //Replace with your API

const iconImg = document.getElementById("weather-icon");
const loc = document.querySelector("#location");
const tempC = document.querySelector(".c");
const tempF = document.querySelector(".f");
const desc = document.querySelector(".desc");
const sunriseDOM = document.querySelector(".sunrise");
const sunsetDOM = document.querySelector(".sunset");

window.addEventListener("load", () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const date = new Date();
      console.log(date);

      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
      // const base = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${api}&units=metric`;

      //Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
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

          // Five Days Forecast
          let forecast = new Forecast(place);
          let dailyData = forecast.cityForecast();
        });
    });
  }
});

const submitBtn = document.getElementById("js-city-submit-btn");
submitBtn.addEventListener("click", () => getCityForecast());
function getCityForecast() {
  const cityName = document.getElementById("js-city-search").value;
  // check if the city name is not empty
  if (cityName == "") {
    let warning = "Please provide a city name";
    document.getElementById("warning").textContent = warning;
  } else {
    document.getElementById("warning").textContent = "";
    let forecast = new Forecast(cityName);
    let forecastContainer = document.getElementById("daily-forecast");
    if (forecastContainer.childNodes.length >= 1) {
      while (forecastContainer.firstChild) {
        forecastContainer.removeChild(forecastContainer.lastChild);
      }
    }
    let dailyData = forecast.cityForecast();
  }
}
