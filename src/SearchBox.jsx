import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e9ec5e13fc3111ef7badd4775e9d1afb";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }
            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setError(false); // Reset error state on each new search
            console.log(city);
            setCity("");
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true); // Set error state if there's an error fetching data
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}
