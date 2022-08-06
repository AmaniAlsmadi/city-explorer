//import {reander} from @
import { Component } from "react";
class Weather extends Component {
    render() {
        return (
            <>
                {
                    this.props.weather.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <p>Date: {item.date} </p>
                                <p>Description: {item.description}</p>
                            </li>
                        )
                    })
                }

            </>
        )
    }

}
export default Weather;