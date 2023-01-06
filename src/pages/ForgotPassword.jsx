import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth/OAuth";
import OupsBtn from "../components/OupsBtn/OupsBtn";
import SignInBtn from "../components/SignInBtn/SignInBtn";

export default function ForgotPassword() {
  const [email, setEmail] = useState();
  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Successfully sent password reset email");
    } catch (error) {
      toast.error("Unknown email")
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb:12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 mt-5">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />

            <OupsBtn name="Don't have a account ?" url="/sign-up" urlName="Register" secondName="Sign in instead" secondUrl="/sign-in" />

            <SignInBtn name="Reset password"/>
            <div className="flex items-center my-4 before:border-t before:flex-1  before:border-gray-400 after:border-t after:flex-1  after:border-gray-400">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
