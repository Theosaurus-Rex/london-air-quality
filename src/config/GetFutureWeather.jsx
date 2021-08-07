import {useState, useEffect} from 'react'
import axios from 'axios'
import {decode} from 'html-entities'
import reactStringReplace from 'react-string-replace'



const GetFutureWeather = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weather, setWeather] = useState([]);
  
    useEffect(() => {
      axios("https://api.tfl.gov.uk/AirQuality/")
        .then(
          res => setWeather(decode(res.data.currentForecast[1]))
        )
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
        })
        .finally(
          setIsLoaded(true),
          setWeather(decode(weather)))
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const decodedWeather = decode(weather.forecastText)
      const futureWeather = reactStringReplace(decodedWeather, '<br/>', (match, i) => (
        <br/>
      ))
      return (
        <p>{futureWeather}</p>
      );
    }
  }

  export default GetFutureWeather