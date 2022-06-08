import React from "react"

import NavBar from "./components/NavBar"
import Card from "./components/Card"
import Header from "./components/Header"

import Data from "./Data"
console.log(Data);
//{...item} alternative to item={item}

export default function App(props) {
    const CardData = Data.map(item =>{
        return <Card 
            key={item.id}
            item={item}
            />
    })
    return(
        <div className="container">
        <NavBar />
        <Header />
        <div className="cards">
            {CardData}
        </div>
        </div>
    )
}