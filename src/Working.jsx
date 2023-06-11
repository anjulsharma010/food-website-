import React from 'react';

const Working = () => {
  return <>
    <div className="step-container">

      <h1 className="heading">how it <span>works</span></h1>

      <section className="steps">

        <div className="box">
          <img src="images/step-1.jpg" alt="" />
          <h3>choose your favorite food</h3>
        </div>
        <div className="box">
          <img src="images/step-2.jpg" alt="" />
          <h3>free and fast delivery</h3>
        </div>
        <div className="box">
          <img src="images/step-3.jpg" alt="" />
          <h3>easy payments methods</h3>
        </div>
        <div className="box">
          <img src="images/step-4.jpg" alt="" />
          <h3>and finally, enjoy your food</h3>
        </div>

      </section>

    </div>

  </>
}

export default Working;