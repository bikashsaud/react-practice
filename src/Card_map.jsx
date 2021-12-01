import react from "react";
import Sdata from './series_data'

function nCard(val){
    return (
      <Card 
      key = {val.id}
      imgsrc={val.imgsrc}
      title = {val.title} 
      sname={val.sname}
      link= {val.link}
    />
    )
  }