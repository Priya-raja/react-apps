import React, { useState } from 'react';
import './App.css';

function Login() {
    const isAuthenticated = false;
    const [resData, setResData] = useState("")

    const handleSubmit =() => {
        const payload = {
            "email": "eve.holt@reqres.in",
            "password":"cityslicka"
        }

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res=> res.json())
        .then((json) => {
            // setResData(data.token)
            debugger
            setResData(json)});
    }

    // const handleSubmit =() =>{
    //     fetch('https://reqres.in/api/login')
    //     .then(result => result.json())
    //     .then(json => console.log(json))
        
    // }
    return (
        <div className="Login">
            <form>
                <div>
                <label>
                    Email: </label>
                    <input type="text" 
                    name="name" autoComplete ="off" />
                
                <label>
                    Password: </label>
                    <input type="password"
                     name="password" 
                     autoComplete ="off"/>
                
                <button type="submit"
                value="submit"
                onClick = {handleSubmit}
                
                > Submit</button> 
                
                <label>{resData} </label>
                </div>
            </form>
        </div>
    )
}

export default Login
