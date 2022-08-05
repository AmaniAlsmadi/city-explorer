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
                                <p> {item.date} </p>
                                <p>{item.description}</p>
                            </li>
                        )
                    })
                }

            </>
        )
    }

}
export default Weather;