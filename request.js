/* eslint-disable no-unused-vars */
const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';
const requestCity = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);
    //promise data
    const data = await response.json();
    return data;

}
