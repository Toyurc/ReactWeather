var axios = require('axios')

// 03ebe5effa6f7cb14f3ecff379bf9bfd

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=03ebe5effa6f7cb14f3ecff379bf9bfd'
module.exports = {
  getTemp: function (location) {
    var encodedLoaction = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoaction}`

    return axios.get(requestUrl).then(function (res) {
      console.log(res)
      if (res.data.cod && res.data.message) {
        return res.data.list[0]
      } else {
        throw new Error(res.data.message)
      }
    }, function (res) {
      throw new Error(res.data.message)
    })
  }
}
