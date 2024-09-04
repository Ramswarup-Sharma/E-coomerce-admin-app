import React from 'react'
import CustomInput from '../components/CustomInput'

const Forgotpassword = () => {
  return (
    <div className='py-5' style={{background: "#ffd333", minHeight: '100vh'}}>
    <br/>
    <br/>
    <br/>
    <br/>
     <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
     <h3 className='text-center title'>Forgot Password</h3>
     <p className='text-center'>Please enter your register email to get reset password to mail</p>
     <form action=""> 
     <CustomInput type="text" label="Email Address" id="email" />
      <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{background: "#ffd333"}} type="submit">Send link</button>
     </form>
     </div>
    </div>
  )
}

export default Forgotpassword;
