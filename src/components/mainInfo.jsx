import '../styles/info.css';

const MainInfo = ({weather}) => {
    return <div className="info-c">
         <h4 className='city'> {weather?.location.name} - {weather?.location.country}</h4>
        <div className='details'>
            <div className='details-info'>
                <p>Temperature: {weather?.current.temp_c}°C </p>
                <p>Feels like: {weather?.current.feelslike_c} °C </p>
                <p>Wind: {weather?.current.wind_kph} km/h</p>
                <p>Precipitations: {weather?.current.precip_mm} mm</p>
            </div>
            <div>
                <img className='icon' alt="weather" src={`http:${weather?.current.condition.icon}`} width="120" />
            </div>
        </div>
    </div>
}

export default MainInfo;