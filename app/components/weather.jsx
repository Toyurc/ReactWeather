var React = require('react')
var WeatherForm = require('weatherForm')
var WeatherMessage = require('weatherMessage')
var openWeatherMap = require('openWeatherMap')

var weather = React.createClass({

  getInitialState: function () {
    return {isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this
    this.setState({isLoading: true})
    openWeatherMap.getTemp(location).then(function (res) {
      that.setState({
        location: location,
        temp: res.main.temp,
        isLoading: false
      })
    }, function (errorMessage) {
      console.log(errorMessage)
      that.setState({isLoading: false})
      console.log(errorMessage)
      alert('city doesnt exist')
    })
      .catch((err) => {
        console.log(err)
        alert('city doesnt exist')
      })
  },

  render: function () {
    var {isLoading, temp, location} = this.state
    function renderMessage () {
      if (isLoading) {
        return <h4>getting your weather...</h4>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h1>weather component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = weather
