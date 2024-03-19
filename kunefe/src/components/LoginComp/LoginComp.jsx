import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPageContainer, SingInForm, LoginInfo } from './LoginComp-styled';

function LoginComp() {
    const navigate = useNavigate();

    function registerPageButton() {
        navigate("/register");
    }

    return (
        <div>
            <LoginPageContainer>
                <div className="login-info-container">
                    <LoginInfo>
                        <div className="infodiv">
                            <h1>LOGIN</h1>
                            <p>Welcome back! Let's pick up where you left off.</p>
                        </div>
                    </LoginInfo>
                </div>
                <div className="login-form-container">
                    <SingInForm>
                        <input type="name" placeholder='username'/>
                        <input type="password" placeholder='password'/>
                        <p> Don’t have an account?
                            <button  className='register-button' onClick={registerPageButton}>Register </button>
                        </p>
                        <button className="login-button">LOGIN</button>
                    </SingInForm>
                </div>
            </LoginPageContainer>
        </div>
    );
}

export default LoginComp;
