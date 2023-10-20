import { useState } from 'react'
const CreateAccount = ({onAdd,onUserAdd}) => {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => {
        setIsFocused(true);
    };

    const [firstName, setFname] = useState('')
    const [lastName, setLname] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userRePassword, setRePassword] = useState('')
    const [hideFirstName, setHideFirstName] =useState(false)
    const [hideLastName, setHideLastName] =useState(false)
    const [hideEmail, setHideEmail] =useState(false)
    const [hideValidEmail, setHideValidEmail] = useState(false)
    const [hidePassword, setHidePassword] =useState(false)
    const [hideRePassword, setHideRePassword] =useState(false)
    const [hideMatchPassword, setHideMatchPassword] =useState(false)
    var emailpattern ="[a-zA-Z0-9_.!$-]{3,15}[@]{1}[a-zA-Z]{5}[.]{1}[a-z]{3}";
    const [hideContent, setHideContent] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!firstName){
            setHideFirstName(true)
            setHideLastName(false)
            setHideEmail(false)
            setHideValidEmail(false)
            setHidePassword(false)
            setHideRePassword(false)
            setHideMatchPassword(false)
            return
        }else if(!lastName){
            setHideFirstName(false)
            setHideLastName(true)
            setHideEmail(false)
            setHideValidEmail(false)
            setHidePassword(false)
            setHideRePassword(false)
            setHideMatchPassword(false)
            return
        }else if(!userEmail){
            setHideFirstName(false)
            setHideLastName(false)
            setHideEmail(true)
            setHideValidEmail(false)
            setHidePassword(false)
            setHideRePassword(false)
            setHideMatchPassword(false)
            return
        }else if(!userEmail.match(emailpattern)){
            setHideFirstName(false)
            setHideLastName(false)
            setHideEmail(false)
            setHideValidEmail(true)
            setHidePassword(false)
            setHideRePassword(false)
            setHideMatchPassword(false)
            return
        }else if(!userPassword){
            setHideFirstName(false)
            setHideLastName(false)
            setHideEmail(false)
            setHideValidEmail(false)
            setHidePassword(true)
            setHideRePassword(false)
            setHideMatchPassword(false)
            return
        }else if(!userRePassword){
            setHideFirstName(false)
            setHideLastName(false)
            setHideEmail(false)
            setHideValidEmail(false)
            setHidePassword(false)
            setHideRePassword(true)
            setHideMatchPassword(false)
            return
        }else if(userPassword !== userRePassword) {
            setHideFirstName(false)
            setHideLastName(false)
            setHideEmail(false)
            setHideValidEmail(false)
            setHidePassword(false)
            setHideRePassword(false)
            setHideMatchPassword(true)
            return
        }
        else{
            setHideFirstName(false)
            setHideLastName(false)
            setHideEmail(false)
            setHideValidEmail(false)
            setHidePassword(false)
            setHideRePassword(false)
            setHideMatchPassword(false)
        }
        onUserAdd(firstName+ " " +lastName)
        onAdd({name:firstName+ " " +lastName ,email: userEmail,password: userPassword})
        setHideContent(true)
        setTimeout( ()=>{
            setHideContent(false)
        },5000);
        setFname('')
        setLname('')
        setPassword('')
        setEmail('')
        setRePassword('')
    }
  return (
    <div className="productSection flex-set" >
        <h1 className="text-center">Create An Account</h1>
        <form className='add-form' style={{ display: hideContent ? 'none' : 'block' }} onSubmit={onSubmit}>
            <div className='form-control' style={{border:  hideFirstName ? '1px solid red' : '1px solid gray'}}>
                <label>First Name:</label>
                <input type='text' placeholder='Enter First Name'  className="ca-fname" value={firstName} onChange={(e) => setFname(e.target.value)} style={{ outline: isFocused ? 'none' : 'none' }} onFocus={handleFocus}/>   
            </div>
            <span className="validation-content"style={{display: hideFirstName ? 'block' : 'none' }} >Enter First Name</span>

            <div className='form-control' style={{border:  hideLastName ? '1px solid red' : '1px solid gray'}}>
                <label>Last Name:</label>
                <input type='text' placeholder='Enter Last Name' className="ca-lname" value={lastName} onChange={(e) => setLname(e.target.value)}/>
            </div>
            <span className="validation-content"style={{display: hideLastName ? 'block' : 'none' }} >Enter Last Name</span>

            <div className='form-control' style={{border:  hideEmail || hideValidEmail ? '1px solid red' : '1px solid gray'}}>
                <label>Email:</label>
                <input type='text' placeholder='Enter Email' className="ca-email" value={userEmail} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <span className="validation-content"style={{display: hideEmail ? 'block' : 'none' }} >Enter Email</span>
            <span className="validation-content"style={{display: hideValidEmail ? 'block' : 'none' }} >Enter Valid Email</span>

            <div className='form-control' style={{border:  hidePassword ? '1px solid red' : '1px solid gray'}}>
                <label>Password:</label>
                <input type='password' placeholder='Enter Password' className="ca-password" value={userPassword} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <span className="validation-content"style={{display: hidePassword ? 'block' : 'none' }} >Enter Password</span>

            <div className='form-control' style={{border:  hideRePassword || hideMatchPassword ? '1px solid red' : '1px solid gray'}}>
                <label>Re Password:</label>
                <input type='password' placeholder='Enter Re Password' className="ca-re-password" value={userRePassword} onChange={(e) => setRePassword(e.target.value)} />
            </div>
            <span className="validation-content"style={{display: hideRePassword ? 'block' : 'none' }} >Enter Re-Password</span>
            <span className="validation-content"style={{display: hideMatchPassword ? 'block' : 'none' }} >Password doesn't Match</span>
            
            <div className="button-div">
                <input type='submit' value='Create an Account' className='btn btn-block btn-info account-btn' />
            </div>
        </form>
        <div style={{ display: hideContent ? 'block' : 'none' }}   className="printMessage">
                <h1>Your Account Has Been Create</h1>
        </div>
    </div>
  )
}

export default CreateAccount
