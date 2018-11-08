import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import person from './data/person'

ReactDOM.render(<App {...person}/>, document.getElementById("react-root"))