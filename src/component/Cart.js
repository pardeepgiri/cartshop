import React, { useEffect, useState } from 'react'

const Cart = ({cart}) => {
    const[ducart,setducart]=useState([]);
  
    useEffect(()=>{
        setducart(cart)
    },[cart])
  return (
    <div className='carditem'>
        {
            ducart.map((cartitem,cartindex)=>{
                return(
                    <div>
                        <img src={cartitem.url} width={60} alt=""/>
                        <span> {cartitem.name} </span>
                        <button onClick={()=>{
                            const _y=ducart.map((item,index)=>{
                                return cartindex===index ? {...item,quantity :item.quantity >1 ? item.quantity - 1:1}:item

                            })
                            setducart(_y)
                        }}>-</button>
                        <span>{cartitem.quantity}</span>
                        <button onClick={()=>{
                            const _x=ducart.map((item,index)=>{
                                return cartindex===index ? {...item,quantity : item.quantity+1}:item

                            })
                            setducart(_x)
                        }}>+</button>
                        <span>RS.{cartitem.price}</span>
                        
                    </div>
                )
            })
            
        }
        <h3>
            Total Amount.
        {
            ducart.map(cartitem=>cartitem.price*cartitem.quantity).reduce((total,value)=>total+value,0)
        }
        </h3>

    </div>
  )
}

export default Cart;