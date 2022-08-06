import React from "react";

export default class WeatherDay extends React.Component{
render(){
    return(

        <li>
        <p>Date: {this.props.dayData.date} </p>
        <p>Description: {this.props.dayData.description}</p>
    </li>
    )
}


}