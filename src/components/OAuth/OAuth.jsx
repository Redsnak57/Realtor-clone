import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify'
import {db} from "../../firebase"

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check if user exist
      const docRef = doc(db,"users",user.uid);
      const docSnap = await getDoc(docRef);
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name : user.displayName,
          email : user.email,
          timestap : serverTimestamp(),
        });
        navigate("/");
      } else {
        toast.error("User already exists");
      }
    } catch (error) {
      toast.error("Could not auth with Google.");
    }
  }

  return (
    <button className='flex items-center justify-center w-full bg-red-700 text-white uppercase py-3 px-7 rounded text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-300 ease-in-out' onClick={onGoogleClick} type="button">
        <FcGoogle className="text-2-xl bg-white rounded-full mr-2"/>
        Continue with google
    </button>
  )
}
