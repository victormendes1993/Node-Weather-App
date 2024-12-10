import axios from 'axios'

const geocode = (address, callback) => {

    const formatedAddress = address.trim().replace(/\s+/g, '_');
    const url = `https://api.weatherstack.com/current?access_key=82300bf64d5b1c4ce2a4ecab3fe320a0&query=${encodeURIComponent(formatedAddress)}`

    axios.get(url)
        .then(response => {
            const { data } = response.data
            const { lat, lon } = data.location
            const { query: location } = data.request

            if (!data.success) {
                callback(undefined, { lat, lon, location })
            }
            else {
                callback(`Unable to get weather data.\nError: ${data.error.info}`, undefined)
            }
        }).catch(error => {
            callback(`Unable to connect to server.\nError: ${error.message}`, undefined)
        });

}

export default geocode