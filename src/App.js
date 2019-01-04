import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import ProtectedRoute from './ProtectedRoute'

import Home from './Pages/Home'
import Protected from './Pages/Protected'
import './index.css';

const About = Loadable({
  loader: () => import(/* webpackChunkName: "page_about" */ './Pages/About'),
  loading: () => <div>loading...</div>,
  modules: ['page_about']
})

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/protected" component={ProtectedRoute(Protected)} />                                  
        </Switch>
    );
  }
}
export default App;