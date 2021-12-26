import React from "react";
import Layout from "../Layout";
import "./index.css";

function Cars() {
  return (
    <Layout>
      <div className="cars-parent">
        <div className="row">
          <div className="col-md-6 part-1">
            <img
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
              alt=""
            />
          </div>
          <div className="col-md-6 part-2">
            <img
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
              alt=""
            />
          </div>
          <h1 className="cars-text">C A R S</h1>
        </div>
        <div className="text-seperator"><span>SHEY</span></div>
      </div>
    </Layout>
  );
}

export default Cars;
