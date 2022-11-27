import logo from './logo.svg';
import './App.css';
import { useState } from "react";


import React from 'react';




function App() {
  const btcard=([
    {title:"Earning Monthly",money:"$40,000",color:"#4e73df",div:false,font:"fas fa-calendar fa-2x text-gray-300"},
    {title:"Earning (Annualy)",money:"$215,000",color:"#1cc88a",div:false,font:"fas fa-dollar-sign fa-2x text-gray-300"},
    {title:"Tasks",money:"50%",color:"#36b9cc",div:true,font:"fas fa-clipboard-list fa-2x text-gray-300"},
    {title:"Pending Request",money:"18",color:"#f6c23e",div:false,font:"fas fa-comments fa-2x text-gray-300"}])
    console.log(btcard.title)


  return (
   <div>
    {/* < Chartjs/> */}
     <h1>Dashboard</h1><br></br>
 
    <div className="App">
     

     {btcard.map((btcard)=> <Card title={btcard.title} money={btcard.money} color={btcard.color} div={btcard.div} font={btcard.font}/> )}
     
    </div>
    </div>
  );
}
function Card({title,money,color,div,font}){

  const style={
   color:{ color:color},
   backgroundColor:{backgroundColor:color},



}
console.log(style.color)

  return(
    <div className='main'>
      <div className='card'>
      <div style={style.backgroundColor} className='empty' ></div>
        </div>

    <div className='cont'>
    <div >
       <h4 style={style.color}>{title}</h4>
       
      
      <div className='persent'>
      <p>{money}</p>
      {div ?  <div className='empty-persantage'>
     <div className='persentage'>
        
        </div> 
      </div>:null}
     </div>
     
     </div>
     
     <i class={font}></i>
   
    </div>

      
    </div>
  )
}
export default App;
