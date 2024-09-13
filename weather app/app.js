const apiKey = 'yourapikey';

function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                showError(`Error: ${data.message}`);
            }
        })
        .catch(error => {
            showError('Error fetching the weather data');
        });
}

function displayWeatherData(data) {
    const locationStatusElement = document.querySelector('.location-status');
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    
    if (locationStatusElement && temperatureElement && descriptionElement) {
        locationStatusElement.textContent = `${data.name}, ${data.sys.country}`;
        temperatureElement.textContent = `${data.main.temp}°C`;
        descriptionElement.textContent = data.weather[0].description;
    } else {
        console.error('One or more elements are missing in the DOM');
    }
}

function showError(message) {
    const locationStatusElement = document.querySelector('.location-status');
    
    if (locationStatusElement) {
        locationStatusElement.textContent = message;
    } else {
        console.error('Location status element is missing in the DOM');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.bxsearch').addEventListener('click', () => {
        const location = document.querySelector('input').value;
        if (location) {
            getWeatherData(location);
        }
    });
});
