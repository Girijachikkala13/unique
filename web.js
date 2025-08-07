 // Get elements
const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherData = document.getElementById('weather-data');

// API endpoint and API key
const apiEndpoint = 'https:                                           
const apiKey = '//api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_API_KEY_HERE';

                               
async function getWeatherData(city) {
    try {
        const response = await fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

                                  
function renderWeatherData(data) {
    if (data) {
        const weatherInfo = `
            <div class="weather-info">City: ${data.name}</div>
            <div class="weather-info">Temperature: ${data.main.temp}°C</div>
            <div class="weather-info">Humidity: ${data.main.humidity}%</div>
            <div class="weather-info">Weather: ${data.weather[0].description}</div>
        `;
        weatherData.innerHTML = weatherInfo;
    } else {
        weatherData.innerHTML = '// Function to get weather data
async function getWeatherData(city) {
    try {
        const response = await fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to render weather data
function renderWeatherData(data) {
    if (data) {
        const weatherInfo = `
            <div class="weather-info">City: ${data.name}</div>
            <div class="weather-info">Temperature: ${data.main.temp}°C</div>
            <div class="weather-info">Humidity: ${data.main.humidity}%</div>
            <div class="weather-info">Weather: ${data.weather[0].description}</div>
        `;
        weatherData.innerHTML = weatherInfo;
    } else {
        weatherData.innerHTML = 'Error: Unable to fetch weather data';
    }
}

                                           
getWeatherBtn.addEventListener('// Add event listener to get weather button
getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
        const data = await getWeatherData(city);
        renderWeatherData(data);
    } else {
        weatherData.innerHTML = 'Please enter a city name';
    }
});

                                                       
cityInput.addEventListener('// Add event listener to city input for enter key press
cityInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            const data = await getWeatherData(city);
            renderWeatherData(data);
        } else {
            weatherData.innerHTML = 'Please enter a city name';
        }
    }
});