import React from 'react'
import PokerBreadCrum from "../components/PokerBreadCrum";
const mystyle = {
  width:"100%",
  height:"auto"
};



const Poker = () => {
  return (
    <div className='mt-[40px]' >
      <PokerBreadCrum />

      <div className="h_iframe">
    <iframe style={{marginTop:"50px",height:"800px",width:"100%"}} src="http://45.14.114.41:8087/" frameborder="0" allowfullscreen ></iframe>
</div>

      
    </div>
  )
}




export default Poker