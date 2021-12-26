import React from "react";
import Layout from "../Layout/index";
import "./index.css";
function Marketing() {
  return (
    <Layout>
      <div className="marketing-parent">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-md-4 text-center">
            <h1 data-aos='slide-right'>SATHYA</h1>
            <div className="h-50 py-5">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_boxe3lx3.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h2 data-aos='slide-left'>The Market Analyst</h2>
          </div>
          <div className="col-md-7">
            <div className="h-50 py-5" data-aos='slide-down'>
              <lottie-player
                src="https://assets9.lottiefiles.com/private_files/lf30_rn1i0mvd.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Marketing;
