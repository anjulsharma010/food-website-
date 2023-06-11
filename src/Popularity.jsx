import React, { useEffect, useState } from "react";

const Popularity = (props) => {

  const getCartList = ()=>{
    let list = localStorage.getItem('cartList')
    if(list){
      return JSON.parse(list);
    }else{
      return []}
  }

  // console.log('popularity= ', props.sources)
  const data= props.sources;

  const [orderId, setOrderId] = useState(getCartList)



  // get id of the component by clicking order_Btn
  const order=(order_data)=>{
    // const order=(btn_id)=>{
    // console.log('getting id= ', btn_id)

    // const getingdata= data.find((ele)=>{
    //     return btn_id === ele.id
    //   })
    // console.log(getingdata)
    // setOrderId((old)=>{
    //   return [...old, getingdata ]
    // })
    // setOrderId([...orderId,{...getingdata,quantity:1}])

    setOrderId([...orderId,{...order_data,quantity:1}])
   
    console.log(orderId)

  }
// now we will set these value in to the local storage 
  useEffect(()=>{
    localStorage.setItem('cartList',JSON.stringify(orderId))
  },[orderId])
   
  return <>
    <section className="popular" id="popular">

      <h1 className="heading"> most <span>popular</span> foods </h1>
      <div className="box-container">

        
        {data.map((item)=>{
          return <>
          <div className="box">
          <span className="price"> ₹ {item.price} </span>
          <img src={item.img} alt="" />
          <h3>{item.name}</h3>
          
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>

          {/* <a href="#" className="btn">order now</a> */}
          <div className="btn" onClick={()=>order(item)}>order now</div>
          </div>
          </>
        })}


      </div>
    </section>
  </>
}

export default Popularity;
