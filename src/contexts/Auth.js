import React, { useContext, useState, useEffect } from 'react'
import { supabase } from '../supabase';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
          setLoading(false);
      })

      supabase.auth.onAuthStateChange((_event, session) => {
          console.log("session changed to:");
          console.log(session);
          setSession(session);
          setLoading(false);
      })
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signInWithPassword: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    session,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

