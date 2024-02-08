export const geoApiOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_WEATHER_RAPID_API_HOST
    }
};

export const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;

export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;





