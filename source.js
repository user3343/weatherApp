const apiKey = "f4a56f3f894c385f83802c5160ad09ea";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=delhi";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid =${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();
