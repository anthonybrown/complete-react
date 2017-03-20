import React from 'react'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {/* 3 arguments are the data you want, a function, indentation */}
        {/* <pre><code>{JSON.stringify(preload, null, 2)}</code></pre> */}
        {preload.shows.map((show) => {
          return (
            <h3>{show.title}</h3>
          )
        })}
      </div>
    )
  }
})

export default Search
