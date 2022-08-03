import { Component } from "react";
class Weather extends Component {
    render() {
    return (
         <>
        {
         this.props.weather.map(item => {
         return (
            <>
        <p> {item.date} </p>
        <p>{item.description}</p>
          </> 
           )
        })
         }

         </>
        )
    }

}
export default Weather;