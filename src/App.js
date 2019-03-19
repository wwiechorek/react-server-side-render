import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import ProtectedRoute from './ProtectedRoute'
import { setLanguage } from './language'

import Home from './Pages/Home'
import Protected from './Pages/Protected'
import Test from './Pages/Test'
import './index.css';

const About = Loadable({
  loader: () => import(/* webpackChunkName: "page_about" */ './Pages/About'),
  loading: () => <div>loading...</div>,
  modules: ['page_about']
})



class App extends Component {
  // constructor(props) {
  //   super(props)
  //   import('./language/pt-br.json')
  //   .then(resp => {
  //     setLanguage(resp)
  //   })
  // }
  
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/test" component={Test} />
          <Route path="/protected" component={ProtectedRoute(Protected)} />                                  
        </Switch>
    );
  }
}
export default App;