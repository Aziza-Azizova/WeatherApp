export function getDay(dt, data){
    let millisecond = dt * 1000;
    if(data === 'weekday'){
        return new Date(millisecond).toLocaleDateString('ru-RU', {
            weekday: 'long'
        })
    }else if(data === 'day'){
        return new Date(millisecond).toLocaleDateString('ru-RU', {
            day: 'numeric'
        })
    }else if(data == 'month'){
        return new Date(millisecond).toLocaleDateString('ru-RU', {
            month: 'short'
        })
    }
}