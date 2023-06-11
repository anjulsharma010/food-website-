import React, { useEffect, useState } from 'react';

import AdminDashbord from './AdminDashbord';
// import {Routes,Route} from 'react-router-dom';




const OrderP2=()=>{

    //in last we will get the item from local storage
 const getlist =()=>{
    let list = localStorage.getItem('foodOrderData');

    if(list){
        return JSON.parse(list)
    } else {
        return [];
    }
 }


    const[cInput , setInput] = useState({
        name:'',
        email:'',
        phone:'',
        foodname:'',
        textarea:'',
    });

    // const [arryText, setArrText] = useState([])
    const [arryText, setArrText] = useState(getlist())   //now we will put that local storage data into this useState

    
    const handleEvent = (event) =>{
        // const [name,value] = event.target;
        const name1 = event.target.name;
        const value1 = event.target.value;

        // console.log(name1);
        // console.log(value1);
        setInput({...cInput, [name1]:value1})

    }

    const orderNowBtn = (e) =>{
        e.preventDefault();
        // setArrText((olditems))
     //   =====================METHOD 1=======================================================================   
         if(cInput.name && cInput.email && cInput.foodname  && cInput.textarea && cInput.phone){
            setArrText([...arryText,{...cInput, id:new Date().getTime().toString()}])   
        
        }else{ alert("fill full Order form") }
     
                     //-----METHOD 2--------------------------

        // if(!cInput.name && !cInput.email && !cInput.foodname  && !cInput.textarea && !cInput.phone){
        //     console.log("fill form")
          
        // }else{  setArrText([...arryText,{...cInput, id:new Date().getTime().toString()}])     }

    // ===================================================================================================

        // console.log(arryText)
        // console.log(Object.keys(cInput)) //yeah btata hai kitni key value hai object ke andar

        setInput({name:"", foodname:"", textarea:"", phone:"", email:"" })

    }


        // set data into local storage
        useEffect(()=>{
            localStorage.setItem('foodOrderData',JSON.stringify(arryText))
        },[arryText])
    

  return<>
          <section className="order" id="order" style={{ overflow:" hidden"}}>

        <h1 className="heading"> <span>order</span> now </h1>

        <div className="row">

            <div className="image">
                <img src="images/order-img.jpg" alt="" />
            </div>

            <form>

                <div className="inputBox">
                    <input onChange={handleEvent} type="text" placeholder="namee" name="name" id="name" value={cInput.name}/>
                    <input onChange={handleEvent} type="email" placeholder="email" name="email" id="email" value={cInput.email}/>
                </div>

                <div className="inputBox">
                    <input onChange={handleEvent} type="number" placeholder="number" name="phone" id="phone" value={cInput.phone}/>
                    <input onChange={handleEvent} type="text" placeholder="food name" name="foodname" id="foodname" value={cInput.foodname}/>
                </div>

                <textarea onChange={handleEvent} placeholder="address" name="textarea" id="textarea" cols="30" rows="10" value={cInput.textarea}></textarea>

                <button type="submit"  className="btn"  onClick={orderNowBtn}>Order Now</button>
                

            </form>
        </div>   
    {/* </section> */}


    {/* <table className="styled-table">
        <thead>
            <tr>
                <th>name</th>
                <th>emails</th>
                <th>contacts</th>
                <th>foodnames</th>
                <th>addresses</th>
            </tr>
        </thead>

        <tbody>
        {arryText.map((itemVelues)=>{
             return <AdminTable name={itemVelues.name} emails={itemVelues.email}  foodnames={itemVelues.foodname} contacts={itemVelues.phone} addresses={itemVelues.textarea}  />
        })}
            <tr className="active-row">
            <td>ChandraShekhar Garg</td>
                <td>ChandraShekharGarg @gmail.com</td>
                <td>9867543289</td>
                <td>Tasty Burger</td>
                <td>Gawalior Madhya Pradesh India</td>
            </tr>

        </tbody>
    </table> */}

    
  {/* <AdminDashbord newSrc={arryText}  sendFn ={getlist()}/> */}

    {/* <Routes>

          <Route exact path='/dashbord' element={<AdminDashbord newSrc={arryText} />} />  
    </Routes>  */}
    </section>
  </>
}



export default OrderP2;