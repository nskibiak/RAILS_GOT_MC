// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

const Hello = props => (
  <div>Hello {props.name}!</div>
)

// const Button = props => (
//   <Button color="primary">Hello World</Button>;
// )

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Button color="primary">Hello World</Button>,
    document.body.appendChild(document.createElement('div')),
  )
})

// function App() {
//   return <Button color="primary">Hello World</Button>;
// }
