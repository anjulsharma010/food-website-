import React from 'react';

const Home = () => {
  return <>
    <section className="home" id="home">

      <div className="content">
        <h3>food made with love</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
        {/* <a href="" className="btn">order now</a> */}
        <button className="btn">Order Now</button>
      </div>

      <div className="image">
        <img src="images/home-img.png" alt="" />
      </div>

    </section>
  </>
}

export default Home;