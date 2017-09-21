var React = require('react')
var Nav = require('nav')

var main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="grid-container fluid">
        <div className="grid-x grid-margin-x align-center-middle text-center">
          <div className="cell small-4">{props.children}</div>
        </div>
      </div>
    </div>

  )
}
module.exports = main
