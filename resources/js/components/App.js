import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import DetailsList from './DetailsList'
import DetailsForm from './DetailsForm'
import Bootstrap from 'bootstrap'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id="main_container">
          <Switch>
            <Route exact path='/' component={DetailsList} />
            <Route path='/create' component={DetailsForm} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
