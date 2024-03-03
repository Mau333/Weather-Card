const apikey="286f2061c0835e9d9e43ea0b2d926c5a";
const baseUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input=document.querySelector(".search input")
const btn=document.querySelector(".search button")
const icon=document.querySelector(".weather-icon");

async function checkWeather(city) {
	
	const response = await fetch(baseUrl+city+`&appid=${apikey}`);
	if(response.status==404){
		document.querySelector(".error").style.display="block";
		document.querySelector(".weather").style.display="none";
		
	}
	else{
		document.querySelector(".error").style.display="none";
	const data = await response.json();
	console.log(data);
	
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=data.main.temp +`°C`;
	document.querySelector(".humidity").innerHTML=data.main.humidity+`%`;
	document.querySelector(".wind").innerHTML=data.wind.speed+` km/h`;
	if(data.weather[0].main==="clear")
	{
		icon.src="weather-app-img/images/clear.png"
	}
	else if(data.weather[0].main==="Clouds")
	{
		icon.src="weather-app-img/images/clouds.png"
	}
	else if(data.weather[0].main==="Drizzle")
	{
		icon.src="weather-app-img/images/drizzle.png"
	}
	else if(data.weather[0].main==="Mist")
	{
		icon.src="weather-app-img/images/mist.png"
	}
	else if(data.weather[0].main==="Rain")
	{
		icon.src="weather-app-img/images/rain.png"
	}
	else if(data.weather[0].main==="Snow")
	{
		icon.src="weather-app-img/images/snow.png"
	}
	else if(data.weather[0].main==="Haze")
	{
		icon.src="weather-app-img/images/Haze.png"
	}

	document.querySelector(".weather").style.display="flex";
}
  }

  btn.addEventListener("click",()=>{
	checkWeather(input.value);
  })

 

  