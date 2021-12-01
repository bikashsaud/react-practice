import React  from "react";
import Card from "./Card"
import SData from "./series_data";
import Netflix from "./UserFav/Netflix";
import Amazon from "./UserFav/Amazon";
import SlotM from "./SlotMachine/SlotCondiotion";

const  App = () => {
  return(
    <>
    <h1 className="heading_style">
       WelCome to
       <span style={{ fontWeight : 'bold'}}> Slot Machine Game </span>
    </h1>
    <div className="slot_inner">
      <SlotM x= '😏'  y = '😄' z = '😄' />
      <SlotM x = '😄' y = '😄' z = '😄' />
      <SlotM x = '😈' y = '👨' z = '😼' />
      <SlotM x = '🍎' y = '🍎' z = '🍎' />
    </div>
    </>
  )
}

export default App
