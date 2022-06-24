import React from "react"
import { ItemCount } from "./ItemCount";

const Greeting = ({saludo}) => (
    <>
    <h2 style={{backgroundColor:'red'}}>{saludo}</h2>
    <ItemCount  Stock = {5}/>
    </>
);

export default Greeting