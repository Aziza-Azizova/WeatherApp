import logoImg from '@i/logo.svg';
import gulpImg from '@i/gulp.svg';
import windImg from '@i/wind.svg';
import tempImg from '@i/temp.svg';
import sunImg from '@i/sun.svg';
import rainImg from '@i/rain.svg';
import mistImg from '@i/mist.png';
import pressureImg from '@i/pressure.svg';
import cloudImg from '@i/mainly_cloudy.svg';
import smallRainImg from '@i/small_rain.svg';
import precipitationImg from '@i/precipitation.svg';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';

function Header() {
    const { search, setSearch, getWeather, weather } = useContext(Context);
    const [theme, setTheme] = useState('light');
    const [time, setTime] = useState(cityTime());
    const [weatherImg, setWeatherImg] = useState(sunImg)

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        setTime(cityTime());
        changeWeatherIcon();
    }, [theme, weather]);

    function changeWeatherIcon(){
        let descr = weather?.current.weather[0].main
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

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    function cityTime(){
        return new Date().toLocaleString('ru-RU', {
            timeZone: weather?.timezone,
            hourCycle: 'h24',
            timeStyle: 'short'
        })
    }

    return (
        <header className='header'>
            <div className="container">
                <nav className='nav'>
                    <a href="" className="logo">
                        <img src={logoImg} alt="" />
                        <span>React Weather</span>
                    </a>
                    <form action="" className='nav__form' onSubmit={(e) => { e.preventDefault(); getWeather(search) }}>
                        <img src={gulpImg} alt="gulp icon" className='nav__form-img' onClick={() => changeTheme()} />
                        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Выбрать город' type="text" className='nav__form-input' />
                    </form>
                </nav>
                <div className="header__content">
                    <div className="header__left">
                        <h1 className="header__left-temp">{weather && Math.round(weather?.current.temp)}°</h1>
                        <h2 className="header__left-today">Сегодня</h2>
                        <p className="header__left-date">Время: {time}</p>
                        <p className="header__left-city">Город: {weather?.name}</p>
                        <img src={weatherImg} alt="" className="header__left-img" />
                    </div>
                    <div className="header__right">
                        <div className="header__right-item">
                            <div className="header__right-img"><img src={tempImg} alt="" /></div>
                            <span className="header__right-temp">Температура</span>
                            <span className="header__right-descr"> {weather && Math.round(weather?.current.temp)}° - ощущается как {weather && Math.round(weather?.current.feels_like)}°</span>
                        </div>
                        <div className="header__right-item">
                            <div className="header__right-img"><img src={pressureImg} alt="" /></div>
                            <span className="header__right-temp">Давление</span>
                            <span className="header__right-descr"> {weather && weather?.current.pressure} мм ртутного столба - нормальное</span>
                        </div>
                        <div className="header__right-item">
                            <div className="header__right-img"><img src={precipitationImg} alt="" /></div>
                            <span className="header__right-temp">Осадки</span>
                            <span className="header__right-descr"> Без осадков</span>
                        </div>
                        <div className="header__right-item">
                            <div className="header__right-img"><img src={windImg} alt="" /></div>
                            <span className="header__right-temp">Ветер</span>
                            <span className="header__right-descr"> {weather && Math.round(weather?.current.wind_speed)} м/с юго-запад - легкий ветер</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header