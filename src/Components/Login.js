import { useState } from 'react'
const Login = ({users,onAdd}) => {

    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => {
        setIsFocused(true);
    };
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState()
    const [hideEmail, setHideEmail] = useState(false)
    const [hideValidEmail, setHideValidEmail] = useState(false)
    const [hidePassword, setHidePassword] = useState(false)
    var emailpattern ="[a-zA-Z0-9_.!$-]{3,15}[@]{1}[a-zA-Z]{5}[.]{1}[a-z]{3}";
    let checkEmail=0;
    let checkPassword=0;
    let userName= ''
    const onSubmit = (e) => {
        e.preventDefault()
        if(!userEmail){
            setHideEmail(true)
            setHideValidEmail(false)
            setHidePassword(false)
            return
        }
        else if(!userEmail.match(emailpattern)){
            setHideEmail(false)
            setHideValidEmail(true)
            setHidePassword(false)
            return
        }
        else if(!userPassword){
            setHideEmail(false)
            setHideValidEmail(false)
            setHidePassword(true)
            return
        }else{   
            setHidePassword(false)
            setHideEmail(false)
            setHideValidEmail(false)
        }
        users.forEach((user)=>{
            if(user.email === userEmail){
                checkEmail=1;
                console.log(checkEmail)
                if(user.password===userPassword){
                    checkPassword=1;
                    userName=user.name;
                }
                else{
                    checkEmail=0;
                    checkPassword=0;
                }
            }
            return ''
        })
        if(checkPassword===1 && checkEmail===1){
            onAdd(userName)
        }
        else{
            alert('You Entered a Wrong Email & Password')
            return
        }
        setPassword('')
        setEmail('')
    }
  return (
    <div className="productSection">
        <h1 className="text-center">Login</h1>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Enter Email' className="login-name" style={{ outline: isFocused ? 'none' : 'none' }} onFocus={handleFocus} value={userEmail} onChange={(e) => setEmail(e.target.value)}   />
                <span className="validation-content" style={{ display: hideEmail ? 'block' : 'none' }}>Please Enter email</span>
                <span className="validation-content" style={{ display: hideValidEmail ? 'block' : 'none' }}>Please Enter Valid email</span>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' className="login-password" placeholder='Enter Password' style={{ outline: isFocused ? 'none' : 'none' }} onFocus={handleFocus} value={userPassword} onChange={(e) => setPassword(e.target.value)} />
                <span className="validation-content" style={{ display: hidePassword ? 'block' : 'none' }}>Please Enter Password</span>
            </div>
            <div className="button-div">
                <input type='submit' value='Login' className='btn btn-block btn-info account-btn' />
            </div>
            
        </form>
    </div>
  )
}

export default Login
