import React from "react";
import { Link } from "react-router-dom";

function BackBtn({ Page }) {
  return (
    <>
      <div className="">
        <span>
          <Link to="/" className="font-bold">
            Home /{" "}
          </Link>
        </span>
        <span className="text-green-500 font-semibold">{Page}</span>
      </div>
      <div className="font-bold text-4xl text-center lg:text-left">{Page}</div>
    </>
  );
}

export default BackBtn;
