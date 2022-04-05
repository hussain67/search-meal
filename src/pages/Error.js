import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="page-section page-section-error">
      <h1 className="page-section-title"> oops! it's a dead end</h1>
      <Link to="/">
        <button className="btn">Back Home</button>
      </Link>
    </section>
  );
};

export default Error;
