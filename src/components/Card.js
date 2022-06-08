import React from "react"

export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
            <div className="card" >
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`../img/${props.item.coverImg}`} alt="cardImage" className="card-img"></img>
                <div className="card-stats">
                    <i className="uil uil-favorite"></i>
                    <span className="gray">{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) . </span>
                    <span className="gray">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><b>${props.item.price}</b></p>
            </div>
    )
}

//src={`../../public/img/${props.img}`}