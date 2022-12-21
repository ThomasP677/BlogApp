import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut, AuthErrorCodes } from "firebase/auth"
import { auth } from "../firebaseConfig"

export function SignIn() {
  return <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      <img src={auth.currentUser.photoURL} width ="20"   alt="Profile Picture"></img>
      Hello, {auth.currentUser.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}