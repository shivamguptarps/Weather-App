let output = document.getElementsByClassName("output");
let temp = document.getElementById("temp");
let feels = document.getElementById("feels");
let humid = document.getElementById("humid");
let wind = document.getElementById("wind");
let description = document.getElementById("desc");
let mainDesc = document.getElementById("main");



const cityI = document.getElementById("cityI");
const searchbtn = document.getElementById("searchbtn");

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "160ba82940142f3f798ee5e595752030";


async function getData(API_KEY, city) {
  let response = await fetch(
    `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  return await response.json();
}

searchbtn.addEventListener("click", async () => {
  const input = cityI.value;
  const result = await getData(API_KEY, input);
  main.innerText = result.weather[0].main;
  temp.innerText = result.main.temp;
  humid.innerText = result.main.humidity;
  feels.innerText = result.main.feels_like;
  wind.innerText = result.wind.speed;
  document.getElementsByTagName('img')[0].src=`img/${result.weather[0].main}.jpg`
  description.innerText = result.weather[0].description;
  output[0].style.display = "block";
  console.log(result);
  console.log(input);
});