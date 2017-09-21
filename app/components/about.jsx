var React = require('react')

var about = (props) => {
  'use strict'
  return (
    <div>
      <h1>About</h1>
      <p>This is a weather built on React. I built it to learn about React</p>
      <p>
        Hear are some tools i used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Library
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Maps</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>

  )
}

module.exports = about
