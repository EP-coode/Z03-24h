import React, { useRef } from 'react';

function login(username, password) {
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ usr_name: username, passwd: password }),
        headers: {
            'Content-Type': 'application/json'
        }

    })
}

function register(username, password) {

}

function Login({ onLoginSucces = (username, loginMessage) => { } }) {
    const passRef = useRef()
    const loginRef = useRef()

    const handleLogin = () => {
        const username = loginRef.current.value
        const password = passRef.current.value

        login(username, password)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    if (data.status == "succes") {
                        onLoginSucces(username, data.message)
                    }
                }
            })
    }

    const handleCreateAccount = () => {
        const username = loginRef.current.value
        const password = passRef.current.value

        login(username, password)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data);
                }
            })
    }

    return (
        <div className="login">
            <input type="text" ref={loginRef}></input>
            <input type="text" ref={passRef}></input>
            <button onClick={handleLogin}>Zaloguj</button>
            <button onClick={handleCreateAccount}>Zarejestruj</button>
        </div>
    )

}

export default Login