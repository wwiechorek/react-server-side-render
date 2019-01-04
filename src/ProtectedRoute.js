import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export const createCookie = (name, value, options = {}) => {
    let expires = ""
    
    if (options.expire) {
        var date = new Date();
        date.setTime(date.getTime()+(options.expire*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    
    document.cookie = name+"="+value+expires+"; path=/";
}
export const readCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
       var c = ca[i];
       while (c.charAt(0)===' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) === 0) return    c.substring(nameEQ.length,c.length);
    }
    return null;
}
export const eraseCookie = (name) => {
    createCookie(name,"",-1);
}
export default (Comp) => {
    class ProtectedRoute extends Component {
        state = {
            loading: true,
            granted: false
        }
        constructor(props) {
            super(props)
            let granted =  false
            if(readCookie('authorization'))
            granted = true
            this.state = {
                loading: false,
                granted
            }
        }
        render() {
            if(this.state.loading)
            return <div />
            
            if(!this.state.granted)
            return <Redirect to='/' />
            
            return <Comp {...this.props} />
        }
        
    }
    return ProtectedRoute
}