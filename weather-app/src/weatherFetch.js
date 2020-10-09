import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [mainHumidity,setMainHumidity] = useState('');
    const [description,setDescription] = useState('');
    const [city,setCity] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    
    useEffect(async () => {

    	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=api_key`);
		const data = await response.json();
		console.log(data);

		setFeelsLike(Math.floor(data.main.feels_like - 273));
	    setMainTemp(Math.floor(data.main.temp - 273));
	    setMainHumidity(data.main.humidity);
	    setCity(data.name);
	    setDescription(data.weather[0].description);
	    setMain(data.weather[0].main);
	    setIconID(data.weather[0].icon);

	},[])

	return (
	    <>
		<form>
		<br/><br/>
			<input type="text" placeholder="Ville"/><br/><br/>
			<button> Which ville do you want to see the Meteo ?</button>
		</form>

	    <h1>Ville : {city}</h1>
	    <h1>Température : {mainTemp}{'\u00b0'} Celsius</h1>
	    <h1>Ressenti: {feels_like}{'\u00b0'} Celsius</h1>
	    <h1>Humidité: {mainHumidity} %</h1>
	    <h1>Description du temps: {main} / {description} </h1>
	    <h1></h1>
	    <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
	    </>
	)
}
export default WeatherFetch;
