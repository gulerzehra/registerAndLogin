import React from 'react';
import { RegisterPageContainer, SingUpForm, RegisterInfo } from './RegisterComp-styled';

function RegisterComp() {

    return (

        <div>
            <RegisterPageContainer>
                <div className="login-info-container">
                    <RegisterInfo>
                        <div className="infodiv">
                            <h1>REGISTER</h1>
                            <p>Let’s get started! Register for club access</p>
                        </div>
                    </RegisterInfo>
                </div>
                <div className="login-form-container">
                    <SingUpForm>
                        <input type="name" placeholder='username'/>
                        <input type="email" placeholder='email' />
                        <input type="password" placeholder='password'/>
                        <input type="password" placeholder='password confirm' />
                        <button className="register-button">REGISTER</button>
                    </SingUpForm>
                </div>
            </RegisterPageContainer>
        </div>

    )
    
}

export default RegisterComp;