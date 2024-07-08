import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelslike : 24.84,
        temp :25.5,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
    });

    let updateInfo= (result) =>{
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}