//Class exercise 3

function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
}

function getWeather(coords) {
    return new Promise(function (resolve, reject) {
            const apiKey = "e69daad6b58596732fc059092b2f07e9";
            const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function (){
                if (req.status === 200) {
                    resolve(JSON.parse(req.response));
            } else {
            reject(new Error(req.statusText))}
            }
            req.send();
})
}

getLocation().then(res => {
    getWeather(res).then(weather => document.getElementById('weather').innerHTML = weather.main.temp + ' ' + weather.weather[0].description)
})



