import  React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ForecastTable from '../ForecastTable';



export default function ContentCard() {

  const [weatherInfo, setWeatherInfo] = useState(0);

  useEffect(() => {
    fetch("weather/search")
    .then(response => response.json())
    .then(data => setWeatherInfo(data))
  },[])

  return (
    <Box sx={{ minWidth: 275,padding: 10 }}>
      <Card variant="outlined">
       <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Weather info for Location: {weatherInfo?.name}
            </Typography>
            <Typography variant="h5" component="div">
                {weatherInfo?.weather?.length > 0 ? weatherInfo?.weather[0]?.description : ''}
            </Typography>
            <Typography variant="body2">
            Feels Like: {weatherInfo?.main?.feels_like} <br/>
            Temp: {weatherInfo?.main?.temp}
              <br />
           Humidity : {weatherInfo?.main?.humidity}
            </Typography>
          </CardContent>

        </React.Fragment>
  </Card>
  <br/>
          <ForecastTable></ForecastTable>
    </Box>
  );
}
