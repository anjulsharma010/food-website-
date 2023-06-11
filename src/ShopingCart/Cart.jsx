import React, { useEffect, useState } from "react";


const Cart=()=>{
    // document.write('shoping Cart');
    const getCartList = ()=>{
        let list = localStorage.getItem('cartList')
        if(list){
          return JSON.parse(list);
        }else{
          return []}
      }

      const [getOrderList, setOrderList] = useState(getCartList())
      // console.log(getOrderList)
      console.log("checkLength",getCartList.length)
  



//detBtn
    //   const delBtn = (del_id)=>{
    //     console.log("delBtn",del_id)
    //     const delData = getOrderList.filter((item)=>{
    //         return !(item.id===del_id);
    //     });
    //     // localStorage.removeItem(delData)
    //     setOrderList([localStorage.removeItem(delData)])
    //   }

      const delBtn= (del_id) => {
  
        setOrderList((olditem) => {
          return olditem.filter((el, index) => {
            return el.id !== del_id;
          })
        })
      }

        //REmove all
//   const removeAll = () => {
//     setOrderList([]);
//   }

let TotalPrice = getOrderList.reduce((total,item)=>total+(item.price*item.quantity),0)
console.log(TotalPrice)



  useEffect(()=>{
    localStorage.setItem('cartList',JSON.stringify(getOrderList))
  },[getOrderList])

    return<>
        <section className="gallery">
                <h1>shoping Cart</h1> Total :{TotalPrice}

                {getOrderList.map((item,cartIndex)=>{
                    return<>
                    <div className="cart-container">
                <div>
                     <h1>{item.name}</h1>
                    <h2 >Price ₹ {item.price}</h2>
                    {/* <button style={{padding:"5px",border:"px solid gray", color:"red",position:"relative",left:"10.5rem",top:"9rem"}}>X</button> */}
                </div>
                
                    <div className="cartCard">   
                        <img src={item.img} alt="food" width="100%"></img>
                        <div className="btnBox">
                            <button className="newbtn" onClick={()=>delBtn(item.id)}  style={{padding:"5px",border:"px solid gray", color:"red",}}>X</button> 
                            {/* <button className="newbtn" onClick={removeAll}  style={{padding:"5px",border:"px solid gray", color:"red",}}>Dell all</button>   */}
                         
                            <button className="newbtn" 

                            onClick={()=>{
                              const data =getOrderList.map((item,index)=>{
                                return cartIndex===index && item.quantity >1? {...item,quantity:item.quantity-1}:item;
                              })
                              setOrderList(data)
                            }
                            
                            }>-</button>  
                                <span>{item.quantity}</span>

                            <button className="newbtn" 
                            onClick={()=>{
                              console.log('increse')
                              console.log(cartIndex)
                              const data = getOrderList.map((item,index)=>{
                                return cartIndex===index?{...item,quantity:item.quantity+1}:item;
                              })
                              setOrderList(data)
                            }}
                            >+</button>  

                        </div>
    
                    </div>
                </div>
                    </>
                })}

        </section>
    </>
}



export default Cart;