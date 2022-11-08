import { useRef, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()

  // Get signUp function from the auth context
  const { signUp } = useAuth()

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password })

    if (error) {
      alert('error signing up')
    } else {
      // Redirect user to Dashboard
      navigate('/')
    }
  }

  return (
    <div className='sign-up'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />
        <br />
        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>

        <p>
            Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp;