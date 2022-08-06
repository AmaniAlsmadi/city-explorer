//import {reander} from @
import { Component } from "react";
import WeatherDay from "./weatherDay";

class Weather extends Component {
    render() {
        return (
            <>
                {
                    this.props.weather.map((item) => {
                        return (
                           <WeatherDay dayData={item} />
                        )
                    })
                }

            </>
        )
    }

}
export default Weather;