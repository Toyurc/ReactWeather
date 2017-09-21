var React = require('react')
var Nav = require('nav')

var main = (props) => {
  'use strict'
  return (
    <div>
      <Nav/>
      <h2>
       Hello React
      </h2>
      {props.children}
    </div>
  )
}
module.exports = main
