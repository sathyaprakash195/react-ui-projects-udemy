import React from "react";
import Layout from "../Layout";
import "./index.css";
function Coffieshop() {
  return (
    <Layout>
      <div className="coffieshop-parent">
        <div className="row h-100 align-items-center">
          <div
            className="col-md-6 coffieshop-text-part p-5"
            data-aos="slide-down"
          >
            <h1>
              Its not just <b>COFFIE</b>
            </h1>
            <h2>
              Its <b>SOMETHING</b> more....
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a
              accusamus corporis cumque incidunt sequi, nemo quos nobis velit?
              Dolorum dolore eligendi velit delectus minima quam odio, obcaecati
              minus illum.
            </p>
          </div>
          <div
            className="col-md-6 h-75 flex align-items-center coffie-cup"
            data-aos="slide-up"
          >
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_dauput1g.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="circle"></div>
        </div>
      </div>
    </Layout>
  );
}

export default Coffieshop;
