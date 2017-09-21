var React = require('react')
var weatherMessage = ({temp, location }) => {
  return (
    <h3>
      Its {temp} in {location} city.
    </h3>
  )
}

module.exports = weatherMessage
