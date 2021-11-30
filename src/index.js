import React  from "react";
import ReactDOM from "react-dom";

import Card from "./Card"
import SData from "./series_data";
import Sdata from './series_data'

ReactDOM.render(
  <>
      <h1>TOP 10 Netflix Series</h1>

    <Card 
    imgsrc={SData[0]['imgsrc']}
    title = {Sdata[0]['title']} 
    sname={Sdata[0]['sname']}
    link= {Sdata[0]['link']}
  />
    <Card 
    imgsrc={SData[1]['imgsrc']}
    title = {Sdata[1]['title']} 
    sname={Sdata[1]['sname']}
    link= {Sdata[1]['link']}
  />
      <Card 
    imgsrc={SData[2]['imgsrc']}
    title = {Sdata[2]['title']} 
    sname={Sdata[2]['sname']}
    link= {Sdata[2]['link']}
  />
      <Card 
    imgsrc={SData[3]['imgsrc']}
    title = {Sdata[3]['title']} 
    sname={Sdata[3]['sname']}
    link= {Sdata[3]['link']}
  />

  </>
, document.getElementById('root')
);

{/* <Card 
  imgsrc="https://occ-0-4111-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ4HySPdUY-5TtRD7o9U4bJDhZ70maqF-fJ8jhjNc1GZGWa2s_MocCD1VEA9hmebxJwbTFHAZG6GobSlyIZYrUVfO-hjbc66r43ans0WEgp_ClnFZuqQOYYRRKts.jpg?r=02d"
  title = "A Netflix Original Series"
  sname="Helly Bound"
  link="https://www.netflix.com/np/title/81256675"
/>  

<Card 
    imgsrc="https://occ-0-4111-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQCcYpChthxsZQ5WGbjtoPKANvAlzetRttqwMu3n5gl1D4jisccCMbgAcFfBmwXIOfjQeCdIzDZ47FAkX85kZQTUKcISpo3Uio8WEhFWXhhMhw3yUBx-Z0ymyCVd.jpg?r=cfa"
    title = "A Netflix Original Series"
    sname="Money Heist"
    link="https://www.netflix.com/np/title/80192098"
/>  

<Card 
    imgsrc="https://occ-0-4111-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABatBKtC4V1JuLoCvbfq1JQG3K2Bui_h6Sp0PIEYr2MHkiQCta-DvZlBbMTIopXpCU_v6b56sOjmlIoEBuv0RLdEzjrQoIx70MqxhgEa8NK05yM_VrTzfQNfhgNvQ.jpg?r=d92"
    title = "A Netflix Original Series"
    sname="Lucifer"
    link="https://www.netflix.com/np/title/80057918"
/>   */}
