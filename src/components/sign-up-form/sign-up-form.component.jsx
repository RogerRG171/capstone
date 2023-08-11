import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up-form.styles.scss'
const defaultFormFields= {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  //states
  const [error, setError] = useState('')
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields

  //functions
  const handleSubmit = async (event) =>{
    event.preventDefault()
    setError('')
    if(password !== confirmPassword) {
      setError('Password doesn`t match...')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
  
      const userRef = await createUserDocumentFromAuth({...user, displayName})
        
    } catch (error) {
      setError(`${error}`)
      console.log('User creation encontred a error: '+error)      
    }

    setFormFields(defaultFormFields)
  }

  const handleChange = (event)=> {
    event.preventDefault()
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})

  }

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput label={'Display Name'} type="text" required name='displayName' value={displayName}
        onChange={handleChange} 
        />

        <FormInput label={'Email'} type="email" required name='email' value={email}
        onChange={handleChange} 
        />

        <FormInput label={'Password'} type="password" required name='password' value={password}
        onChange={handleChange} 
        />

        <FormInput label={'Confirm Password'} type="password" required name='confirmPassword' value={confirmPassword}
        onChange={handleChange} 
        />
        {error.length > 0 && (
          <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>
        )}
        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm