import React from 'react';
import logo from './../assets/Union.png';
import companyname from './../assets/lendsqr.png';
import art from './../assets/pablo-sign-in 1.png';
import Input from '../components/inputlogin';

const Login : React.FC = () => {
  return (
    <div className='login'>
      <div className='left'>
        <div className='top'>
          <img src={logo} alt='logo' className='logo'/>
          <img src={companyname} alt='lendsqr' className='companyname'/>
        </div>
        <div className='bottom'>
          <img src={art} alt='pic' className='art'/>
        </div>
      </div>
      <div className='right'>
        <div className='calss2'>
        <h1 className='greetings'>Welcome!</h1>
        <p>Enter details to login</p> 
        </div>
        <div className='calss1'>
        <Input/> 
        </div>

      </div>
    </div>
  )
}

export default Login 