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
      alert('city doesnt exist')
    })
      .catch((err) => {
        console.log(err)
      })
  },

  render: function () {
    var { isLoading, temp, location} = this.state
    function renderMEssage () {
      if (isLoading) {
        return <h4>getting your weather...</h4>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h3>
              weather component
        </h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMEssage()}
      </div>
    )
  }
})

module.exports = weather
