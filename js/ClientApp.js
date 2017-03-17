import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color: 'peru'}),
        MyTitleFactory({title: 'semi-colons suck!', color: 'lime'}),
        MyTitleFactory({title: 'Angular is way too complicated', color: 'darkviolet'}),
        MyTitleFactory({title: 'React Rocks \\m/', color: 'rebeccapurple'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
