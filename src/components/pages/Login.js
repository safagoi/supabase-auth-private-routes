import { useRef, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth"

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signInWithPassword } = useAuth()

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value
    
    // Calls `signIn` function from the context
    const { user, error } = await signInWithPassword({ email, password })

    

    if (error) {
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
      navigate('/')
    }
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />
        <br />
        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>

        <p>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login;