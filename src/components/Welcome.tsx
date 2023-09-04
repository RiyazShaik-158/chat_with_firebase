import React from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome: React.FC = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={"GoogleSignin"} // Add your Google sign-in image source here
          alt="sign in with google"
        //   type="button"
        />
      </button>
    </main>
  );
}

export default Welcome;
