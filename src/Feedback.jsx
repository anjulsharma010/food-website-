import React from 'react';

const Feedback = () => {
  return <>
        <section className="review" id="review" onScroll={()=>{console.log("scrolling")}}>

        <h1 className="heading"> our customers <span>reviews</span> </h1>

        <div className="box-container">

            <div className="box">
                <img src="images/pic1.png" alt="" />
                <h3>john deo</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
            </div>
            <div className="box">
                <img src="images/pic2.png" alt="" />
                <h3>john deo</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
            </div>
            <div className="box">
                <img src="images/pic3.png" alt="" />
                <h3>john deo</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
            </div>

        </div>

    </section>

  </>
}

export default Feedback;