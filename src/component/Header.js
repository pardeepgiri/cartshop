import React, { useState } from 'react';
import "./style.css"

const Header = ({showval,searchitem,val,count}) => {
    const[searchval,setsearchval]=useState("");

    function handelsearch(e){
        if (e.key === 'Enter') {
            yourFunction();
          }
    }

    function yourFunction(){
      if(searchval===""){
       searchitem(val)
      }else{
        const filtereddata=val.filter(names=>names.name.toLowerCase().includes(searchval.toLowerCase()));
        if(filtereddata.length===0){
             
        }else{
            searchitem(filtereddata);
        }
      }
    }
  return (
    <div className="headermaindiv">
        <div onClick={()=>showval(false)} className="sitename">dilyShop</div>

        <div>
            <input className='searchbar' type='text' placeholder="Search here..." 
            value={searchval} onChange={(e)=>setsearchval(e.target.value)}
            onKeyPress={handelsearch} ></input>
        </div>
        <div onClick={()=>showval(true)}>
            Cart
          <sup className='supcart'>{count}</sup>
        </div>

    </div>
  )
}

export default Header;