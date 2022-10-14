import './currentWeather.css'

const CurrentWeather = () => {
    return (
        <div className='weather'>
                <div className='top'>
                    <div>
                        <p className='city'>Belgrade</p>
                        <p className='weatherDescription'>Sunny</p>
                    </div>
                    <img alt='weather' className='weatherIcon' src='icons/01d.png'/>
                </div>
                <div className='bottom'>
                    <p className='temperature'>18°c</p>
                    <div className='details'>
                        <div className='parameterRow'>
                            <span className='parameterLabel'>Detalles</span>
                        </div>
                        <div className='parameterRow'>
                            <span className='parameterLabel'>S. Térmica</span>
                            <span className='parameterValue'>22°c</span>
                        </div>
                        <div className='parameterRow'>
                            <span className='parameterLabel'>Viento</span>
                            <span className='parameterValue'>2 m/s</span>
                        </div>
                        <div className='parameterRow'>
                            <span className='parameterLabel'>Humedad</span>
                            <span className='parameterValue'>15%</span>
                        </div>
                        <div className='parameterRow'>
                            <span className='parameterLabel'>Presión</span>
                            <span className='parameterValue'>15 hpa</span>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CurrentWeather;