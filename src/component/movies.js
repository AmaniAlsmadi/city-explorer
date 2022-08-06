import { Component } from "react";
import MovieNest from "./Movie";

class Movie extends Component {
    render() {
        return (
            <>
                {
                    this.props.movie.map((item) => {
                        return (
                           <MovieNest items={item}/>
                        )
                    })
                }

            </>
        )
    }

}
export default Movie;