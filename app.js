import geocode from './utils/geocode.js'
import forecast from './utils/forecast.js'

const query = process.argv[2] ?? ''

if (!query) {
    console.log('Query is empty. Please provide a location.')
} else {

    geocode(query, (error, { lat: latitude, lon: longitude, location } = {}) => {
        if (error) {
            return console.log(`Error: ${error}`)
        }

        console.log(latitude)
        console.log(longitude)

        forecast(latitude, longitude, (error, forecastDescription) => {
            if (error) {
                return console.log(`Error: ${error}`)
            }
            console.log(location)
            console.log(forecastDescription)
        })
    })

}