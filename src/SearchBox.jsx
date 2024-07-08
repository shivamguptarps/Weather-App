import "./SearchBox.css"
import {useState} from "react";
import { TextField,Button } from "@mui/material"


export default function SearchBox({updateInfo}){

    // const API_URL="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
    
    // const API_URL="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";

    // const API_URL="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

    let [city,setCity] = useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="160ba82940142f3f798ee5e595752030";

    let getWeatherInfo = async () =>{
       try{
        let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
 
        let result = {
            city : city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        // console.log(result);
       return result;
    }
    catch(err){
        setError(true);
        return {};
    }
}

    function getCity(event){
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        event.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        

    } 
    return(
        <div className="SearchBox">
            <form action="" onSubmit={handleSubmit}>
            <TextField id="filled-basic" label="Filled" variant="filled" value={city} onChange={getCity} />
            <br />
            <Button variant="contained" type="submit" >Search</Button>
            </form>
            {error && <p>No such place exists</p>}
        </div>
    )
}