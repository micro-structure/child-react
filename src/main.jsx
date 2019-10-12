import React from 'react'
import * as ReactRouterDOM from 'react-router-dom'
import ReactDOM from 'react-dom'

const h = React.createElement

console.log('child file load')

function About() {
  return h('h1', null, 'react about')
}

function App() {
  return h(ReactRouterDOM.HashRouter, {}, [
    h(ReactRouterDOM.Switch, null, [
      h(ReactRouterDOM.Route, { path: '/second', component: About })
    ])
  ])
}

console.log('child mount')
ReactDOM.render(
  <App />,
  document.getElementById('react-root')
)
