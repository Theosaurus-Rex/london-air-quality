
import { useState } from "react";
import CurrentForecast from "./CurrentForecast";
import FutureForecast from "./FutureForecast";

const ForecastText = () => {
    const [currentWeatherView, setCurrentWeatherView] = useState("today")
    const [oppositeWeatherView, setOppositeWeatherView] = useState("tomorrow")

    // Swap the values of current and opposite weather on click
    // This will change which info appears on screen and render relevant text to title and button
    const changeWeather = () => {
        if(currentWeatherView === "today"){
            setCurrentWeatherView("tomorrow")
            setOppositeWeatherView("today")
        } else {
            setCurrentWeatherView("today")
            setOppositeWeatherView("tomorrow")
        }
    }
    return (
        <>  
            <h1>Here is {currentWeatherView}'s forecast:</h1>
            {currentWeatherView === "today" && <CurrentForecast/>}
            {currentWeatherView === "tomorrow" && <FutureForecast/>}
            <button onClick={changeWeather}>What about {oppositeWeatherView}?</button>
        </>
    )
}

export default ForecastText