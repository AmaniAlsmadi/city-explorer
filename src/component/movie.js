import { Component } from "react";
class Movie extends Component {
    render() {
        return (
            <>
                {
                    this.props.movie.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <p> {item.title} </p>
                                <p>{item.overview}</p>
                                <p>{item.average_votes}</p>
                                <p>{item.total_votes}</p>
                                <p>{item.image_url}</p>
                                <p>{item.popularity}</p>
                                <p>{item.released_on}</p>
                            </li>
                        )
                    })
                }

            </>
        )
    }

}
export default Movie;