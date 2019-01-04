import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createCookie } from '../../ProtectedRoute'
import Helmet from 'react-helmet'
import S from './Style.module.css'

class About extends Component {
    login() {
        createCookie('authorization', true, { expires: 1 })
        this.props.history.push('/protected')
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Server-side render react</title>
                    <meta name="description" content="Render server in react - using     helmet" />
                </Helmet>

                Home Page! <br />
                <Link to='/about'>
                    Go To About
                </Link>
                <br />
                <button type='submit' onClick={() => this.login()}>Login</button>
                <br />
                <span className={S.iamamodule}>
                    I`m a module!
                </span>
            </div>
        )
    }

}

export default About