//variables assignment
let city;
function show() {
	city = document.querySelector("select").value
	const apikey = "db92b157e3bdbeedf4012c85b401902e";
	const url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
	let donnees = null;

	//data request
	fetch(url_weather)
		.then(response => {
			return response.json();
		})
		.then(data => {
			donnees = data;
		})
		.catch(error => {
			console.error('erreur:', error);
		});
	let temperature = document.getElementById("temperature");
	setTimeout(() => {
		temperature.innerHTML = donnees["main"]["temp"]+"&deg;C"},
		1000)
}
