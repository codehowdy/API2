// API Key 7fddebc3-b397-473f-ba1c-3762f171fec3
//firebase url https://ndb-api2.web.app
let city;
document.getElementById("city").addEventListener("keyup", (e) => {
    city = e.target.value;
    console.log(city);
})
let state;
document.getElementById("state").addEventListener("keyup", (e) => {
    state = e.target.value;
    console.log(state);
})
const key = '7fddebc3-b397-473f-ba1c-3762f171fec3'

console.log(city, state)

const randoButton = document.getElementById("input")

randoButton.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchResults(city, state, key);
});

function fetchResults(city, state, key) {
    fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${key}`)
        .then(Response => Response.json())
        .then(data => displayResults(data))
}

function displayResults(data) {
    console.log(data);

    ///let weatherPicURL = data.data.current.weather.ic;
    ///let weatherIconElement = document.getElementById("pic");
   /// weatherIconElement.src = `${weatherPicURL}.png`;

    let humidity = data.data.current.weather.hu;
    let hunid = document.getElementById("hum");
    hunid.innerText = humidity + "%";
    // Getting Temperature in celcius and converting to farenheight
    let temp = (data.data.current.weather.tp) * 9 / 5 + 32;
    let tempElement = document.getElementById("temp");
    tempElement.innerText = temp + " Degrees F";



    let usAirQuality = data.data.current.pollution.aqius;
    let usAirElement = document.getElementById("us");
    usAirElement.innerText = usAirQuality + " AQI"



}