import React from "react";
import Layout from "../Layout";
import { Parallax, Background } from "react-parallax";
import "./index.css";

function ParallaxEffect() {
  return (
    <Layout>
      <div className="parallax-parent">
        <Parallax strength={500}>
          <Background>
            <img
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80"
              alt=""
            />
          </Background>
          <div className="parallax-content">
            <div>
              <h1>SATHYA</h1>
              <h3>Fullstack Developer & Instructor</h3>
              <button>Get Started</button>
            </div>
          </div>
        </Parallax>

        <div className="bottom-content">
          <div className="p-5 m-5">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="container">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              reprehenderit eaque expedita eligendi alias pariatur soluta ut a,
              libero, quos dolorem molestias, magnam nihil atque ea
              necessitatibus corporis. Repudiandae, possimus!
            </p>
          </div>
        </div>
        <div className="parallax-footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ff5500"
              fill-opacity="1"
              d="M0,224L1440,64L1440,320L0,320Z"
            ></path>
          </svg>
          <div className="footer-content">
              <p>Designed and Developed By</p>
            <div className="footer-border"></div>
              <h4>Sathyaprakash Reddy.K</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ParallaxEffect;
