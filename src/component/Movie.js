import React from "react";


export default class MovieNest extends React.Component{
    render(){
        return(
    
            <li>
            <p> {this.props.items.title} </p>
            <p>{this.props.items.overview}</p>
            <p>{this.props.items.average_votes}</p>
            <p>{this.props.items.total_votes}</p>
            <img src={this.props.items.image_url} alt='MovieImage'/>
            <p>{this.props.items.popularity}</p>
            <p>{this.props.items.released_on}</p>
        </li>
        )
    }
    
    
    }