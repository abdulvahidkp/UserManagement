import React from "react";
import { Link } from "react-router-dom";

function SignBottom({ text, link, btnText, loading }) {
  return (
    <div className="place-content-center">
      <p className="px-16 py-10">
        {text}&nbsp;
        {loading ? (
          <span className="text-green-800 cursor-not-allowed">{btnText}</span>
        ) : (
          <Link to={link}>
            <span className="text-green-800 hover:text-green-900 hover:underline cursor-pointer">{btnText}</span>
          </Link>
        )}
      </p>
    </div>
  );
}

export default SignBottom;
