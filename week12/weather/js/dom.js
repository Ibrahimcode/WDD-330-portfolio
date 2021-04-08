export default class Dom {
  constructor(content) {
    this.content = content;
  }

  buildFiveDaysForecast() {
    const data = this.content;
    // Converting Epoch(Unix) time to GMT
    const sunriseGMT = new Date(data.sunrise * 1000);
    const sunsetGMT = new Date(data.sunset * 1000);

    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "daily-container");
    let img = document.createElement("img");
    img.setAttribute("class", "daily-img");
    // img.setAttribute("id", day - img);
    img.setAttribute(
      "srcset",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    let locationDiv = document.createElement("div");
    locationDiv.setAttribute("class", "daily-location");
    locationDiv.innerHTML = this.getDay(data.dt);
    //   locationDiv.setAttribute('id','')
    let descDiv = document.createElement("div");
    descDiv.setAttribute("class", "daily-desc desc");
    descDiv.innerHTML = data.weather[0].description;
    let weatherDiv = document.createElement("div");
    weatherDiv.setAttribute("class", "weather");
    let celDiv = document.createElement("div");
    celDiv.setAttribute("class", "c");
    celDiv.innerHTML = data.temp.day.toFixed(2) + "°C";
    let circleDiv = document.createElement("div");
    circleDiv.setAttribute("class", "circle day-circle");
    let ferDiv = document.createElement("div");
    ferDiv.setAttribute("class", "f day-fer");
    ferDiv.innerHTML = ((data.temp.day * 9) / 5 + 32).toFixed(2) + "°F";
    weatherDiv.append(celDiv, circleDiv, ferDiv);
    let infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "info day-info");
    let sunriseH4 = document.createElement("h4");
    sunriseH4.innerHTML = `Sunrise ${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;

    let sunsetH4 = document.createElement("h4");
    sunsetH4.innerHTML = `Sunset ${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
    infoDiv.append(sunriseH4, sunsetH4);
    containerDiv.append(locationDiv, img, descDiv, weatherDiv, infoDiv);
    let forecastContainer = document.getElementById("daily-forecast");
    forecastContainer.append(containerDiv);
    console.log(containerDiv);
    return containerDiv;
  }
  getDay(time) {
    let dt = new Date(time * 1000);
    // dt = dt.toLocaleDateString();
    let dayNumber = dt.getDay();
    let day = "";
    switch (dayNumber.toString()) {
      case "0":
        day = "Sunday";
        break;
      case "1":
        day = "Monday";
        break;
      case "2":
        day = "Tuesday";
        break;
      case "3":
        day = "Wednesday";
        break;
      case "4":
        day = "Thursday";
        break;
      case "5":
        day = "Friday";
        break;
      case "6":
        day = "Saturday";
        break;
      default:
        day = "Your time is not set";
    }
    return day;
  }
}
