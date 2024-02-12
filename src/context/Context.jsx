import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

function ContextProvider({ children }) {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        getWeather();
    }, []);

    async function getWeather(city = 'Tashkent') {
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_APIKEY}`);
        let data = await res.json();
        let { name, lat, lon } = await data[0];
        let res2 = await fetch(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APIKEY}&units=metric`);
        let data2 = await res2.json();
        setWeather({ name, ...data2 })
    }

    return (
        <Context.Provider value={{ search, setSearch, getWeather, weather }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider