import React from "react";
import ShoppingCart from "./shoppingcart";
import Sidebar from "./sidebar";
export default function Navbar(){
    return(
        <>
            <nav className="flex justify-between p-4 bg-red-800 text-white px-4">

<div>  
    <Sidebar/>
</div>
<div>Fashion</div>
<div>
  
 <ShoppingCart/>

</div>

</nav>
        </>
    )
}