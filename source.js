const apiKey = "f4a56f3f894c385f83802c5160ad09ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const weatherIcon = document.querySelector(".weather-img img");
const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");
let cityName = document.querySelector("input").innerText.value;

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°c`;
  document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
  document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist" || "Smoke") {
    weatherIcon.src = "./images/mist.png";
  }
  document.querySelector(".error").style.display = "none";

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
