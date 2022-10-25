import './currentWeather.css'

const CurrentWeather = ({ data }) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weatherDescription'>{data.weather[0].description}</p>
                </div>
                <img alt='weather' className='weatherIcon' src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameterRow'>
                        <span className='parameterLabel'>Detalles</span>
                    </div>
                    <div className='parameterRow'>
                        <span className='parameterLabel'>S. Térmica</span>
                        <span className='parameterValue'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameterRow'>
                        <span className='parameterLabel'>Viento</span>
                        <span className='parameterValue'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameterRow'>
                        <span className='parameterLabel'>Humedad</span>
                        <span className='parameterValue'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameterRow'>
                        <span className='parameterLabel'>Presión</span>
                        <span className='parameterValue'>{data.main.pressure} hpa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;