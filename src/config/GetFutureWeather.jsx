import {useState, useEffect} from 'react'
import axios from 'axios'
import {decode} from 'html-entities'
import reactStringReplace from 'react-string-replace'
import { Puff } from 'svg-loaders-react'



const GetFutureWeather = () => {
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
    }, [weather])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // If not loaded render the loading icon
      return <Puff stroke="#000000"/>;
    } else {
      // Decode HTML entities
      const decodedWeather = decode(weather.forecastText)
      // Replace decoded break tags with actual break tag elements
      const futureWeather = reactStringReplace(decodedWeather, '<br/>', (match, i) => (
        <br/>
      ))
      return (
        <p>{futureWeather}</p>
      );
    }
  }

  export default GetFutureWeather