import React from "react";
import { Link } from "react-router-dom";

function BackBtn({ Page }) {
  return (
    <>
      <div>
        <span>
          <Link to="/" className="font-bold">
            Home /{" "}
          </Link>
        </span>
        <span className="text-green-500 font-semibold">{Page}</span>
      </div>
      <div className="font-bold text-2xl sm:text-4xl">{Page}</div>
    </>
  );
}

export default BackBtn;
