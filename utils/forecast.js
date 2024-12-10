import axios from 'axios'

const forecast = (latitude, longetude, callback) => {

    const url = `https://api.weatherstack.com/current?access_key=82300bf64d5b1c4ce2a4ecab3fe320a0&query=${latitude},${longetude}`

    axios.get(url)
        .then(response => {
            const { data } = response.data
            const { info } = data.error.info
            const { weather_descriptions: weatherDescription } = data.current

            if (!data.success) {
                callback(undefined, weatherDescription[2])
            }
            else {
                callback(`Unable to get weather data.\nError: ${info}`, undefined)
            }
        }).catch(error => {
            callback(`Unable to connect to server.\nError: ${error.message}`, undefined)
        });

}

export default forecast