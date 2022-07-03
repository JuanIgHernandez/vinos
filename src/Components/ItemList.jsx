import React from "react";
import { Item } from "./Item";


export const ItemList = ({Products}) =>{
    return <div>
        {
            Products?.map((element)=>{
                return(
                    <Item  element={element} />
                )
            })
        }
    </div>
}