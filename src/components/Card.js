import React from "react";
import locaImg from "./images/location.png";

export default function Card(props){
    // let loca = {props.item.location}
    return(
        <div className="card">
           <img className="card--img" src={props.item.imageUrl}></img> 
           <div className="card--stats">
                <div className="card--top">
                        <h4 className="location"><img src={locaImg}></img>{props.item.location}</h4>
                        <a className="google--map" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card--name">{props.item.title}</h2>
                <p className="card--date"><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p className="card--des">{props.item.description}</p>
           </div>
        </div>
    )
}