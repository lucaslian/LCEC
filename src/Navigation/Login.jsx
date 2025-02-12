import React from 'react';
import LoginInput from "../Components/LoginInput";

function Login() {
    return(
        <form>
            <LoginInput
            type = "text"
            placeholder = "Username"/>
            
            <LoginInput
            type = "password"
            placeholder = "Password"/>

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;