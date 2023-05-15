import React, { useState } from 'react'
import Header from './component/Header'
import Cart from './component/Cart';
import Productlist from './component/Productlist';
import Footer from './component/Footer';
import './component/style.css';

const App = () => {
  const datadetail=[
    {
      url: 'https://image.globalgolf.com/dynamic/1060092/aas/right-shoe-side-angle/puma-proadapt-alphacat-disc-spikeless.jpg?s=350',
      name: 'Puma White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 4550
    },
    {
      url: 'https://assets.ajio.com/medias/sys_master/root/20220531/Zbrt/62965297aeb26921affdff55/-288Wx360H-462265346-black-MODEL.jpg',
      name: 'Campus black Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1390
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/0607/6678/1671/products/STAARK_6G-230_L.GRY-RED_2_037637b1-4370-4f3b-ae1a-8506b2e4e421.jpg?v=1641384490',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/0607/6678/1671/products/LAKE-6G-203-WHT-NAVY_4.jpg?v=1639215300',
      name: 'Campus White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 999
    },
    {
      url: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/g/tr:w-270,/5g-634-navy_1_a7841f34.jpg?rnd=20200526195200',
      name: 'Campus blue Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1650
    },
    {
      url: 'https://assets.ajio.com/medias/sys_master/root/20220726/7oRp/62defd34aeb26921af9b22ff/-473Wx593H-464077665-grey-MODEL.jpg',
      name: 'Campus  Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1390
    },
    {
      url: 'https://static.cilory.com/566791-large_default/black-wolverine-faux-leather-jacket.jpg.webp',
      name: '   Jacket',
      category: 'Jacket',
      seller: 'AMZ Seller Ghz',
      price: 2699
    },
    {
      url: 'https://static.cilory.com/566787-large_default/army-green-faux-leather-jacket.jpg.webp',
      name: 'Jacket',
      category: 'Jacket',
      seller: 'AMZ Seller Ghz',
      price: 3550
    },
    {
      url: 'https://static.cilory.com/423433-large_default/nologo-blue-zip-trucker-jacket.jpg.webp',
      name: 'Jacket',
      category: 'Jacket',
      seller: 'AMZ Seller Ghz',
      price: 1399
    },
    {
      url: 'https://static.cilory.com/566788-large_default/black-quilted-leather-back-printed-biker-jacket.jpg.webp',
      name: 'Jacket',
      category: 'Jacket',
      seller: 'AMZ Seller Ghz',
      price: 4599
    },
    {
      url: 'https://static.cilory.com/545177-large_default/nologo-ice-blue-zip-trucker-jacket.jpg.webp',
      name: 'Jacket',
      category: 'Jacket',
      seller: 'AMZ Seller Ghz',
      price: 1559
    },
    {
      url: 'https://static.cilory.com/568131-large_default/brown-quilted-leather-biker-jacket.jpg.webp',
      name: 'Jacket',
      category: 'Jacket',
      seller: 'AMZ Seller Ghz',
      price: 3910
    },
   
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_zd6E6NTL7CWK8ydsXMcDBHyzUrUZekoJph5BSuq7my7akjYfeW7305S-_2aB-N25jY&usqp=CAU',
      name: 'Apple Watch ',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 3599
    },
    {
      url: 'https://cellmart.pk/wp-content/uploads/2022/09/iusogjs89gsjbib.jpg',
      name: 'Apple Watch',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 4150
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Apple Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 3500
    },
    {
      url: 'https://rukminim1.flixcart.com/image/832/832/kirr24w0-0/watch/1/x/b/pack-of-2-queen-dial-magnetic-strap-luxury-casual-gold-and-black-original-imafyhnqahvfmncb.jpeg?q=70',
      name: 'LOREM Watch ',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 999
    },
    {
      url: 'https://www.zebrs.com/uploads/zebrs/products/2-162398_l.jpg',
      name: 'Apple Watch',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'Dell Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://poshace.com/pub/media/catalog/product/cache/95ca844a72e649bb1089a2da1cdcef7d/7/1/71rvasxc9dl._ac_sl1500__1_.jpg',
      name: 'HP Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 44500
    },
    {
      url: 'https://poshace.com/pub/media/catalog/product/cache/95ca844a72e649bb1089a2da1cdcef7d/8/1/81gc8ln3cjl._ac_sl1500_.jpg',
      name: 'HP Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 65000
    },
    {
      url: 'https://img4.gadgetsnow.com/gd/images/products/additional/large/G338944_View_1/computer-laptop/laptops/asus-vivobook-flip-14-x415ka-bv121ws-intel-pentium-silver-n6000-14-inches-notebook-laptop-8gb-256gb-ssd-windows-11-transparent-silver-1-5-kg-.jpg',
      name: 'Lenvo Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 40000
    },
    {
      url: 'https://img1.gadgetsnow.com/gd/images/products/additional/large/G349792_View_1/computer-laptop/laptops/asus-vivobook-15-x515ma-br011w-intel-celeron-n4020-15-6-inches-everyday-computing-laptop-4gb-256gb-ssd-windows-11-transparent-silver-1-8-kg-.jpg',
      name: 'ASUS Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 39000
    },
    {
      url: 'https://img4.gadgetsnow.com/gd/images/products/additional/large/G313265_View_1/computer-laptop/laptops/hp-pavilion-15-dk2095tx-intel-core-i5-11th-gen-11300h-15-6-inches-gaming-laptop-8gb-512gb-ssd-windows-11-black-2-23-kg-.jpg',
      name: 'HP Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
  ]
  const [data,setdata]=useState(datadetail);
  const[show,setshow]=useState(false);
  const[cartitem,setcartitem]=useState([]);

  function addtocart(item){
    setcartitem([...cartitem,{...item,quantity:1}])
  }
  return (
    <div>
      <Header val={datadetail} searchitem={(value)=>setdata(value)}  showval={(value)=>setshow(value)}
       count={cartitem.length}/>
      {
        show ?
        <Cart cart={cartitem}/>:
        <Productlist product={data} addtocart={addtocart}/>
      }
      <Footer/>
    </div>
  )
}

export default App
