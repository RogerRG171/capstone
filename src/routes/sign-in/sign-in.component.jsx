import Button from '../../components/button/button.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  
  } from '../../utils/firebase/firebase.utils'

  
  const SignIn = () => {

  const logGoogleUser = async() => {

    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser} buttonType={'google'}>
        Sign In with Google
      </Button>
      <SignUpForm />
    </div>
  )
}

export default SignIn