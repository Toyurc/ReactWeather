var React = require('react')
var {Link} = require('react-router')
var examples = (props) => {

  return (
    <div>
      <h1>Examples</h1>
      <p>Here are a few example locations to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Lagos'>Lagos,NG</Link>
        </li>
        <li>
          <Link to='/?location=London'>London,UK</Link>
        </li>
      </ol>
    </div>

  )
}

module.exports = examples
