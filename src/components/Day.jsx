import { getDay } from './getDay';
import sunImg from '@i/sun.svg';
import rainImg from '@i/rain.svg';
import mistImg from '@i/mist.png';
import cloudImg from '@i/mainly_cloudy.svg';
import smallRainImg from '@i/small_rain.svg';
import { useEffect, useState } from 'react';

function Day({day}) {
    const [weatherImg, setWeatherImg] = useState(sunImg);

    function changeWeatherIcon(){
        let descr = day?.weather[0].main;
        console.log();
          if(descr == 'Clouds'){
            setWeatherImg(cloudImg)
          }else if(descr == 'Drizzle'){
            setWeatherImg(smallRainImg)
          }else if(descr == 'Rain'){
            setWeatherImg(rainImg)
          }else if(descr == 'Clear'){
            setWeatherImg(sunImg)
          }else if(descr == 'Mist'){
            setWeatherImg(mistImg)
          }
    }

    useEffect(() => {
        changeWeatherIcon();
    }, [day])

    return (
        <div className='day'>
            <h3 className="day__title">{getDay(day.dt, 'weekday')}</h3>
            <p className="day__date">{getDay(day.dt, 'day')} {getDay(day.dt, 'month')}</p>
            <img src={weatherImg} alt="" className="day__img" />
            <p className="day__temp-day">{Math.round(day.temp.day)}°</p>
            <p className="day__temp-night">{Math.round(day.temp.night)}°</p>
            <p className="day__descr">{day.weather[0].description}</p>
        </div>
    )
}

export default Day