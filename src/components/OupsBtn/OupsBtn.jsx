import React from "react";
import { Link } from "react-router-dom";

export default function OupsBtn(props) {
  return (
    <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
      <p>
        {props.name}
        <Link
          to={props.url}
          className="text-red-500 hover:text-red-400 transition duration-200 ease-in-out"
        >
          {props.urlName}
        </Link>
      </p>
      <p>
        <Link
          to="/forgot-password"
          className="text-blue-500 hover:text-blue-400 transition duration-200 ease-in-out"
        >
          {props.secondName}
        </Link>
      </p>
    </div>
  );
}
