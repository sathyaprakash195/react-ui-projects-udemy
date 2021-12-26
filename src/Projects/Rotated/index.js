import React from "react";
import Layout from "../Layout";
import "./index.css";
function Rotated() {
  return (
    <Layout>
      <div className="rotated-parent">
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <div className="h-75 p-5">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_qhrndegx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rotated-text-part">
              <h1 data-aos="slide-right">
                <b>SATHYA</b>
              </h1>
              <p data-aos="slide-left">
                Fullstack <b>Developer</b> and Instructor
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rotated;
