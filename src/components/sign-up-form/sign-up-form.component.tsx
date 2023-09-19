import { useState, FormEvent, ChangeEvent } from "react"
import { AuthError } from "firebase/auth"
import { signUpStart } from "../../store/user/user.action"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import "./sign-up-form.styles.scss"
import { useDispatch } from "react-redux"
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  //states
  const [error, setError] = useState("")
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  //redux
  const dispatch = useDispatch()

  //functions
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    if (password !== confirmPassword) {
      setError("Password doesn`t match...")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
    } catch (error) {
      setError(`${(error as AuthError).code}`)
      console.log("User creation encontred a error: " + error)
    }

    setFormFields(defaultFormFields)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label={"Email"}
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        {error.length > 0 && (
          <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
        )}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
