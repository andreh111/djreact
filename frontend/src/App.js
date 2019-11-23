import React, { Component } from 'react'
import CustomLayout from './containers/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    )
  }
}
