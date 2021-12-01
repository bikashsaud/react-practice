import React from "react";
import Card from "../Card";
import SData from "../series_data";


const Netflix = () => {
    return (
        < Card 
        key = {SData[2]['id']}
        imgsrc={SData[2]['imgsrc']}
        title =  {SData[2]['title']}
        sname={SData[2]['sname']}
        link= {SData[2]['link']}
        />
        
    )
}

export default Netflix