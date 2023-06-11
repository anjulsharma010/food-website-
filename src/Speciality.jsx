import React from "react";


const Card=({name,description,img,icon})=>{
  // console.log(props)
  return<>
            <div className="box">
          <img className="image" src={img} alt="" />
          {/* <h1>{iteVal.id}</h1> */}
          <div className="content">
            <img src={icon} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
  </>
}


const Speciality = (props) => {
  const data= props.sources;
  // console.log(data)
  // console.log(data[0].id)

  // data.map((itemVal)=><h1>helooooo</h1>)
  return <>
    <section className="speciality" id="speciality">

      <h1 className="heading"> our <span>speciality</span> </h1>
      <div className="box-container">
      {/* <Card /> */}
{/* ----------------------------METHOD 1------------------------------------------------------- */}
      {/* {data.map((itemVal)=>{
        return <>
        <div className="box">
                  <img className="image" src={`${itemVal.img}`} alt="" />
                   <div className="content">
                    <img src={`${itemVal.icon}`} alt="" />
                    <h3>{itemVal.name}</h3>
                    <p>{itemVal.description}</p>
                  </div>
              </div> 
        </>
      })}  */}

{/* ----------------------------METHOD 2------------------------------------------------------- */} 

{data.map((itemVal)=>{
       // return <Card key={itemVal.id}  name1={itemVal.name} description={itemVal.description} />
        return <Card key={itemVal.id} {...itemVal}/>
      })} 

 {/* ---------------------------END------------------------------------------------------------------      */}
      </div>

    </section>


  </>
}

export default Speciality;





