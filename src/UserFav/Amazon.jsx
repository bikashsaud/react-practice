import React from "react";
import Card from "../Card";
import SData from "../series_data";


const Amazon = () => {
    return (
        < Card 
        key = {SData[1]['id']}
        imgsrc={SData[1]['imgsrc']}
        title =  {SData[1]['title']}
        sname={SData[1]['sname']}
        link= {SData[1]['link']}
        />
    )
}

export default Amazon
