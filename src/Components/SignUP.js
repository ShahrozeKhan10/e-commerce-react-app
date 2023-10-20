import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const SignUP = () => {
    const [handleEventCheck, sethandleEventCheck] = useState(true);
    const handleEvents = () => {
        sethandleEventCheck(true)
    }
    const handleEvents1 = () => {
        sethandleEventCheck(false)
    }
    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const handleFirstNameFocus = () => {
        setIsFirstNameFocused(true);
    };

    const handleFirstNameBlur = () => {
        setIsFirstNameFocused(false);
    };

    const [isSecondNameFocused, setIsSecondNameFocused] = useState(false);
    const handleSecondNameFocus = () => {
        setIsSecondNameFocused(true);
    };

    const handleSecondNameBlur = () => {
        setIsSecondNameFocused(false);
    };

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };

    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
    };

    const [isRePasswordFocused, setIsRePasswordFocused] = useState(false);
    const handleRePasswordFocus = () => {
        setIsRePasswordFocused(true);
    };

    const handleRePasswordBlur = () => {
        setIsRePasswordFocused(false);
    };

  return (
    <div class=" signup d-flex flex-row justify-content-center align-items-center mt-5">
        <div class="col-sm-2"></div>
        <div class="col-sm-8  ">
            <div className="outer-div col-sm-12 mb-5  d-flex flex-column justify-content-center align-items-center">
                <div className="first-div mt-4 mb-2 col-sm-12  d-flex flex-row justify-content-center align-items-center" >
                    <button onClick={handleEvents} style={{backgroundColor: handleEventCheck ? 'white': 'transparent', boxShadow: handleEventCheck ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none'}} className="buttonColor btn col-sm-6  mt-2 mb-2 mr-1">Sign In</button>
                    <button onClick={handleEvents1} style={{backgroundColor: handleEventCheck ? 'transparent': 'white', boxShadow: handleEventCheck ? 'none' : '0 0 10px rgba(0, 0, 0, 0.5)'}} className="buttonColor btn col-sm-6  mt-2 mb-2 ml-1">Create Account</button>
                </div>
                <form style={{display: handleEventCheck ? 'none': 'flex'}} className="signup-form mt-2  mb-2 col-sm-12 flex-column justify-content-center align-items-left">
                        <div className="complete-form-field">
                            <label>First Name</label>
                            <div className="setInputHeight firtName d-flex flex-row justify-content-left align-items-center" style={{border: isFirstNameFocused ? '2px solid black' : '1px solid black'}} >
                                <FontAwesomeIcon icon={faUser} className="ml-2 mr-1"/>
                                <input type="text" placeholder="Enter Your First Name" className="signup-input ml-1 col-sm-10" style={{ outline: isFirstNameFocused ? 'none' : 'none' }} onFocus={handleFirstNameFocus} onBlur={handleFirstNameBlur} />
                            </div>
                        </div>
                        
                        
                        <div className="complete-form-field">
                            <label>Last Name</label>
                            <div className="setInputHeight firtName d-flex flex-row justify-content-left align-items-center" style={{border: isSecondNameFocused ? '2px solid black' : '1px solid black'}} >
                                <FontAwesomeIcon icon={faUser} className="ml-2 mr-1"/>
                                <input type="text" placeholder="Enter Your Last Name" className="signup-input ml-1 col-sm-10" style={{ outline: isSecondNameFocused ? 'none' : 'none' }} onFocus={handleSecondNameFocus} onBlur={handleSecondNameBlur} />
                            </div>
                        </div>
                        

                        <div className="complete-form-field">
                            <label>Email</label>
                            <div className="setInputHeight firtName d-flex flex-row justify-content-left align-items-center" style={{border: isEmailFocused ? '2px solid black' : '1px solid black'}}>
                                <FontAwesomeIcon icon={faEnvelope} className="ml-2 mr-1" />
                                <input type="text" placeholder="Enter Your Email" className="signup-input ml-1 col-sm-10" style={{ outline: isEmailFocused ? 'none' : 'none' }} onFocus={handleEmailFocus} onBlur={handleEmailBlur} />
                            </div>
                        </div>
                        

                        <div className="complete-form-field">
                            <label>Password</label>
                            <div className="setInputHeight firtName d-flex flex-row justify-content-left align-items-center" style={{border: isPasswordFocused ? '2px solid black' : '1px solid black'}}>
                                <FontAwesomeIcon icon={faLock} className="ml-2 mr-1"  />
                                <input type="text" placeholder="Enter Your Password" className="signup-input ml-1 col-sm-10" style={{ outline: isPasswordFocused ? 'none' : 'none' }} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} />
                            </div>
                        </div>
                        
                        <div className="complete-form-field">
                            <label>Confirm Password</label>
                            <div className="setInputHeight firtName d-flex flex-row justify-content-left align-items-center" style={{border: isRePasswordFocused ? '2px solid black' : '1px solid black'}}>
                                <FontAwesomeIcon icon={faLock} className="ml-2 mr-1" />
                                <input type="text" placeholder="Enter Your Password" className="signup-input ml-1 col-sm-10" style={{ outline: isRePasswordFocused ? 'none' : 'none' }} onFocus={handleRePasswordFocus} onBlur={handleRePasswordBlur} />
                            </div>
                        </div>

                        <div className="complete-form-field d-flex justify-content-center">
                            <input type="submit" className="signup-input btn formSubmit col-sm-12" value="Create Account" />
                        </div>
                </form>

                <form style={{display: handleEventCheck ? 'flex' : 'none'}} className="signup-form mt-2  mb-2 col-sm-12  flex-column justify-content-center align-items-left">
                    <div className="complete-form-field">
                        <label>Email</label>
                        <div className="setInputHeight firtName d-flex flex-row justify-content-left align-items-center" style={{border: isEmailFocused ? '2px solid black' : '1px solid black'}}>
                            <FontAwesomeIcon icon={faEnvelope} className="ml-2 mr-1" />
                            <input type="text" placeholder="Enter Your Email" className="signup-input ml-1 col-sm-11" style={{ outline: isEmailFocused ? 'none' : 'none' }} onFocus={handleEmailFocus} onBlur={handleEmailBlur} />
                        </div>
                    </div>
                    

                    <div className="complete-form-field">
                        <label>Password</label>
                        <div className="setInputHeight firtName d-flex flex-row justify-content-left align-items-center" style={{border: isPasswordFocused ? '2px solid black' : '1px solid black'}}>
                            <FontAwesomeIcon icon={faLock} className="ml-2 mr-1"  />
                            <input type="text" placeholder="Enter Your Password" className="signup-input ml-1 col-sm-11" style={{ outline: isPasswordFocused ? 'none' : 'none' }} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} />
                        </div>
                    </div>

                    <div className="complete-form-field">
                        <input type="submit" className="signup-input btn formSubmit col-sm-12"  value="Sign In" />
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-2"></div>
    </div>

  )
}

export default SignUP
