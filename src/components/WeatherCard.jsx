import React, { useState } from "react"

const WeatherCard = ({weather, temp}) => {

    const [IsCelsius, setIsCelsius] = useState(true)

    const handleClick = () => {
        setIsCelsius(!IsCelsius)
    }

    return (
        <article className='card'>
            <header className='card_header'>
                <h1 className='card__title'>Wheather App</h1>
                <h2 className='card__subtitle'>{weather?.name} {weather?.sys.country}</h2>
            </header>

            <section className='card__icon-container'>
                <img className='card__icon' src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </section>
            <section className='card__info'>
                <h3 className='card__description'><b>"{weather?.weather[0].description}"</b></h3>
                <ul className='card__list'>
                    <li className='card__item'><span className='card__span'>Wind speed: </span><b>{weather?.wind.speed} m/s</b></li>
                    <li className='card__item'><span className='card__span'>cloud percentage: </span><b>{weather?.clouds.all} %</b></li>
                    <li className='card__item'><span className='card__span'>Presure: </span><b>{weather?.main.pressure} hPa</b></li>
                </ul>
            </section >
            <h3 className='card__temp'>{IsCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`} </h3>
            <footer className='card__footer'>
                <button onClick={handleClick} className='card__btn'>Change to {IsCelsius?'°F':'°C'}</button>
            </footer>
        </article>
  )
}

export default WeatherCard