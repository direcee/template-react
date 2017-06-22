import React from 'react'
import ReactDOM from 'react-dom'

function HelloWord(props){

  return  <div>{props.message}</div>
}

ReactDOM.render(<HelloWord message="Hello World !" />,
  document.getElementById('container'))
