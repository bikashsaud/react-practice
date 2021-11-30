import React  from "react";
import ReactDOM from "react-dom";

import Card from "./Card"
import SData from "./series_data";
import Sdata from './series_data'

function nCard(val){
  return (
    <Card 
    imgsrc={val.imgsrc}
    title = {val.title} 
    sname={val.sname}
    link= {val.link}
  />
  )
}

ReactDOM.render(
  <>
      <h1>TOP 10 Netflix Series</h1>
      {SData.map(nCard)}
  </>
, document.getElementById('root')
);


