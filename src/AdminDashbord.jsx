import React, { useState } from "react";
import AdminTable from './AdminTable';


const AdminDashbord =({newSrc ,sendFn})=>{
    //so when we store our data on Local Storage so we do noo need to get data from the OrderP2.jsx 
    // and we dont need to use props any more 


        //in last we will get the item from local storage
 const getlist =()=>{
    let list = localStorage.getItem('foodOrderData');

    if(list){
        return JSON.parse(list)
    } else {
        return [];
    }
 }

 console.log("here", getlist())
 const [fooddata, setData] = useState(getlist())


    // const data= props.newSrc
    // const data= newSrc
    return<>
            <table className="styled-table" 
            style={{position: "relative", left: "auto", border: "3px solid #73AD21"}}
            >
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
        {fooddata.map((itemVelues)=>{
             return <AdminTable name={itemVelues.name} emails={itemVelues.email}  foodnames={itemVelues.foodname} contacts={itemVelues.phone} addresses={itemVelues.textarea}  />
        })}
            <tr className="active-row">
            <td>raman</td>
                <td>name  @gmail.com</td>
                <td>867768798</td>
                <td>Tasty Burger</td>
                <td>Bhopal Madhya Pradesh India</td>
            </tr>

        </tbody>
    </table>

    </>
}


export default AdminDashbord;