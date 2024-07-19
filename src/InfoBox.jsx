import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://media.istockphoto.com/id/856939024/photo/cracked-earth-soil-sunset-landscape.jpg?s=1024x1024&w=is&k=20&c=u_8VMQt8kZ9OoMqGygaHKMUN0y-Hk9JXJm-9LhSpZGY=";
    const COLD_URL = "https://media.istockphoto.com/id/1457685989/photo/view-of-kufri-in-himachal-pradesh-with-snow-fall.jpg?s=1024x1024&w=is&k=20&c=qFUb-YwqCLCP4L4LmU_fcn-ap6FFaMdbbB0gNSGEdoA=";
    const RAIN_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.jpg?s=1024x1024&w=is&k=20&c=UpKHFfqd8DWY4FmXc--0XXqS01cHTuZluDhbaqRWUg8=";
  
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{ 
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i>  and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}