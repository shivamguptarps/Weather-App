import SearchBox from "./SearchBox.jsx";
import WeatherApp from "./WeatherApp.jsx";
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({Info}){
    
    return (
        <div className="InfoBox">
            <h1>Weather Info </h1>

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1708913156538-7c5fcbd22db5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <p>Temperature = {Info.temp}&deg;C</p>
        <p>Humidity = {Info.humidity}</p>
        <p>Min Temp = {Info.tempMin}&deg;C</p>
        <p>Max Temp = {Info.tempMax}&deg;C</p>
        <p>The weather can be described as {Info.weather}</p>
      </CardContent>

       
    </Card>
        </div>
    )
}