let apiKey = "e4582b00344cb9805ef4d7c4e07102d8";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(url).then(displayTemperature);
