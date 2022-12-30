import React from 'react'

export default function SignInBtn(props) {
  return (
    <button
    type="submit"
    className="w-full bg-blue-500 text-white rounded px-7 py-3 text-small font-medium uppercase hover:bg-blue-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg active:bg-blue-800"
  >
    {props.name}
  </button>
  )
}
