import React  from "react";
import Card from "./Card"
import SData from "./series_data";
import Netflix from "./UserFav/Netflix"
import Amazon from "./UserFav/Amazon"

const user_opt = "netflix";

const FavSeries =() => {

if (user_opt === "netflix")
  {
    return  <Netflix />
  }
  else{
    return  <Amazon />
  }

}
const  App = () => (
  <>
      <h1>TOP 10 Netflix Series</h1>
      <FavSeries />
      {/* thihs is for maping the value from sdata fie */}
      {/* {SData.map((val, index)=>{
          console.log(index, 'index number')
        return(  
        <Card 
        key = {val.id}
        imgsrc={val.imgsrc}
        title = {val.title} 
        sname={val.sname}
        link= {val.link}
      />
      )})
      } */}

  </>
);

export default App
// general function 
// function myadd(a,b){
//   return a+b;
// }wifi adaptor

// fat arrow function

// const myadd = (a,b)=>{
//   return a+b;
// }

// for inline 
// const myadd = (a,b)=>a+b