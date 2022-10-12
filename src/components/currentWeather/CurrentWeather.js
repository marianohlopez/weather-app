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
        </div>
    );
}

export default CurrentWeather;