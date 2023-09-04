import { useState } from 'react'
import Button from '../../components/button/button.component'
import FormInput from '../../components/form-input/form-input.component'

import './sign-in-form.styles.scss'
import { useDispatch } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

const defaultFields ={
  email: '',
  password: ''
}

const SignInForm = () => {

  //states
  const [error, setError] = useState('')
  const [fileds, setFields] = useState(defaultFields)
  const {email, password} = fileds

  //redux
  const dispatch = useDispatch()

  //functions
  const logGoogleUser = async() => {
    dispatch(googleSignInStart())
  }

  const handleChange = async (event)=> {
    event.preventDefault()

    const {name, value} = event.target

    setFields({...fileds, [name]: value})

  }

  const handleSubmit = async (event)=> {
    event.preventDefault()
    setError('')
    if(!email || !password) return

    try {
      dispatch(emailSignInStart(email, password))
    } catch (error) {
      setError(`${error.code}`)
      console.log(error)
    }
    setFields(defaultFields)
  }


  return (
    <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>
          Sign in with your email and password
        </span>
        <form onSubmit={handleSubmit}>
          <FormInput label='Email' type='email' required name='email' value={email} onChange={handleChange}/>
          <FormInput label='Password' type='password' required name='password' value={password} onChange={handleChange}/>
          {error.length > 0 && (
            <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>
          )}
          <div className='btn-container'>
            <Button type='submit'>
              Sign in
            </Button>
            <Button type='button' onClick={logGoogleUser} buttonType='google'>
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
  )
}

export default SignInForm