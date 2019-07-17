import React from "react";
import "./how_it_work.css";

const Work = props => {
  return (
    <section className="section" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="container">
        <div className="work-container">
          <div className="work-header-container">
            <h2 className="work-header">How it works</h2>
            <div className="underscore" />
          </div>
        </div>

        <div className="columns">
          <div className="column is-5">
            <p className="pfc1 f14 fw7 m0">Customize &amp; Book</p>
            <h2 className="css-hv61ur m0 pfc3 f32 fw7">
              <span>
                Amazing
                <br />
                Holiday Packages
              </span>
            </h2>
          </div>
          <div className="column is-7">
            <div className="columns">
              <div className="column is-4 text-center relative at_selectpackage">
                <div className="css-b9oa3s">
                  <div className="css-nx2eya">
                    <img src="https://img.icons8.com/color/86/000000/gift.png" />
                  </div>
                  <h3 className="fwb f20 m0 pb5">Select your package</h3>
                  <h3 className="f14 m0">&amp; tell us your preferences</h3>
                </div>

                <div class="css-1opjgzc">
                  <img src="https://img.icons8.com/color/48/000000/long-arrow-right.png" />
                </div>
              </div>
              <div className="column is-4 text-center relative at_selectpackage">
                Auto
              </div>
              <div className="column is-4 text-center relative at_selectpackage">
                Auto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
