import React, { Component } from 'react'
import {  text, setLanguage, getData } from '../../language'

class Test extends Component {
  state = {
    language: null
  }
  
  constructor(props) {
    super(props)
    if(!getData().lang) {
      import(/* webpackChunkName: "language_pt_br" */'../../language/pt-br.json')
      .then(resp => {
        setLanguage(resp)
        this.setState({
          language: 'loaded'
        })
      })
    } 
  }

  render() {
    return (
      <div>
        Lang: {text()}
      </div>
    );
  }
}

export default Test