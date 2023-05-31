import React, { useState } from 'react'
import "./styles/WeatherCard.css"

const WeatherCard = ({weather, temp}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)

  return (
    <article className='weather'>
        <form>
            <input type="text" />
            <button className='weather__btn-button'>Search</button>
        </form>
        <header className='weather__header'>
        <h1 className='weather__title'>Weahter App</h1>
        <h2 className='weather__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
        </header>
        <section className='weather__body'>
            <div className='weather__img-container'>
                <img src={weather? `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ""} alt="" />
            </div>
            <div className='weahter__info'>
                <h3 className='wether__info-title'>"{weather?.weather[0].description}"</h3>
                <ul className='weather__list'>
                    <li className='weather__list-item'>
                          <span className='weather__list-label'>Wind Speed:
                          </span><span className='weather__list-value'>{weather?.wind.speed} m/s</span></li>


                    <li className='weather__list-item'>
                         <span className='weather__list-label'>Clouds:   
                         </span>   <span className='weather__list-value'>{weather?.clouds.all} %</span></li>
 

                    <li className='weather__list-item'>
                         <span className='weather__list-label'>Pressure: 
                         </span>  <span className='weather__list-value'>{weather?.main.pressure} hPa</span></li>
                </ul> 
            </div> 
        </section>
        <footer className='weather__footer'>
            <h2 className='weather__temp'>{isCelsius ? `${ temp?.celsius}  ºC` : `${temp?.farenheit}  ºF`}</h2>
            <button className='weather__btn' onClick={handleChangeTemp}>Change to {isCelsius ? "ºF" : "ºC"}</button>
        </footer>
    </article>
  );
};

export default WeatherCard