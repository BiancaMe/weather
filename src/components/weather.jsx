import { useEffect, useState } from "react";
import Form from "./form";
import MainInfo from "./mainInfo";
import '../styles/weather.css';

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
}, [weather]);

const loadInfo = async (city = 'Fray Bentos') => {
    try{
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=167de2d13f45435186e00130232008&q=${city}&aqi=no`);
        const info = await data.json();
        setWeather(info);
    } catch(error){

    }
}

const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
}
    return (<div className="weather-c">
            <h1 className="title">WeatherWorld</h1>
            <Form onChangeCity={handleChangeCity} />
            <MainInfo weather={weather} />
         </div>);
}

export default Weather;