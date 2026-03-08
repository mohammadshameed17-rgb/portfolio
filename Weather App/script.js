const apiKey = "f352f599e82589a0a023ea66b6a105a3";

async function checkWeather() {
  let city = document.getElementById("city").value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(apiUrl);

  let data = await response.json();

  document.getElementById("cityName").innerHTML = data.name;
  document.getElementById("temp").innerHTML = data.main.temp + "°C";
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

  let icon = data.weather[0].icon;

  document.getElementById("icon").src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
}
