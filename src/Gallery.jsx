import React from 'react';

const Gallery = ({sources}) => {
    // console.log(sources)
   const data = sources;

  return <>

     <section className="gallery" id="gallery">

            <h1 className="heading"> our food <span> gallery </span> </h1>

            <div className="box-container">

                    {data.map((item)=>{
                        return<>
                        <div className="box">
                            <img src={item.img} alt="" />
                            <div className="content">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                {/* <a href="#" className="btn">ordern now</a> */}
                                <div className="btn">ordern now</div>
                            </div>
                        </div>
                        </>
                    })}

            </div>
    </section>

  </>
}

export default Gallery;