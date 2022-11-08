import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  // Get current user and signOut function from context
  const { session, signOut } = useAuth()

  const navigate = useNavigate()

  async function handleSignOut() {
    // Ends user session
    await signOut()

    // Redirects the user to Login page
    navigate('/login')
  }
  
    return (
      <div className="dashboard">
        <p>Welcome, {session?.user.email}!</p>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    )
  }

export default Dashboard;