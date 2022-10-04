const $ = document.querySelector.bind(document);

const city = $(".city");
const country = $(".country");
const temp = $(".temp span");
const wind = $(".wind");
const humidity = $(".humidity");
const visibility = $(".visibility");

const key = "8c81931f7731ece3118a722c72152130";
window.addEventListener("load", () => {
  getWeather();
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});

function getWeather() {
  const searchValue = $(".input").value;
  const apiGetCountry = `http://api.openweathermap.org/geo/1.0/direct?q=${
    searchValue ? searchValue : "Nam Dinh"
  }&appid=${key}`;
  fetch(apiGetCountry)
    .then((res) => res.json())
    .then((location) => {
      return location;
    })
    .then((location) => {
      const apiGetWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=${key}`;
      fetch(apiGetWeather)
        .then((res) => res.json())
        .then((data) => {
          city.innerText = location[0].name;
          country.innerText = data.sys.country;
          temp.innerText = Math.floor(data.main.temp - 273.15);
          wind.innerText = data.wind.speed + "m/s";
          humidity.innerText = data.main.humidity + "%";
          visibility.innerText = data.visibility;
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
