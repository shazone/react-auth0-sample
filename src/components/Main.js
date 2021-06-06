import React from 'react'
import LoginButton from './LoginButton';

function Main(props) {
    return (
        <div>
            <p className="App-intro">
              Hi, {props.name} Welcome to ReactJS + Auth0 sample.
            </p>
            <p>
              To get started please login.
            </p>

            <LoginButton {...props}/>
        </div>
    )
}

export default Main
