import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='semi-colons suck' color='peru' />
        <MyTitle title='jklol semi-colons are okay' color='darkviolet' />
        <MyTitle title='React just Rocks \m/' color='slateblue' />
      </div>
    )
  }
})

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
)
