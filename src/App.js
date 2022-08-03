
import './App.css';

import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from './component/map';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      cityData: '',
      display_name: '',
      latitude: '',
      longitude: '',
      errorMessage: '',
      displayError: false,
      weather: []
    }
  }

  getData = async (e) => {
    e.preventDefault();
    const allCity = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${e.target.control.value}&format=json`);

    const cityName = e.target.control.value;
    console.log(cityName);
    try {

      console.log(allCity);
      this.setState({
        userInput: e.target.control.value,
        cityData: allCity.data[0],
        display_name: allCity.data[0].display_name,
        latitude: allCity.data[0].lat,
        longitude: allCity.data[0].lon,
        displayError: false,
       
      });
    }

    catch (error) {

      this.setState({
        display_name: '',
        displayError: true,
        errorMessage: error.response.status + ' : ' + error.response.data.error


      })
    }

    //this.displayWeather(allCity.data[0].lat, allCity.data[0].lon, cityName)
  }

  displayWeather = async (lat, lon, cityName) => {
    const weatherData = await axios.get('http://lacalhost:3001/weather', { params: { latitude: lat, longitude: lon, searchQuery: cityName } })
    //new way to passing .. we can use ?$ after url
    const weather = await axios.get(weatherData.data)
    console.log(weather);
    try {
      this.setState({
        weather: weatherData.data,
        displayError: false
    
      })
    } catch (error) {
      this.setState({
        display_name: '',
        displayError: true,
        errorMessage: error.response.status + ':' + error.response.data.error
      })

    }

  }
  render() {
    return (
      <div>
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <Form onSubmit={this.getData} id="control" className='form'>
          <Form.Group className="mb-3" >
            <Form.Label>City Explorer: </Form.Label>
            <Form.Control id="control" type="explorer" placeholder="Enter city name ..." />
          </Form.Group>
          <Button className='button' variant="primary" type="submit">
            Explore!
          </Button>
        </Form>


        {this.state.displayError &&
          <>

            <h1>{this.state.errorMessage}</h1>
            <p> The city you entered cannot be found, please check your spelling or try a different city! </p>


          </>
        }

        {this.state.display_name &&

          <div>
            <h2>City Name: {this.state.display_name}</h2>
            <p>City latitude: {this.state.latitude} </p>
            <p>City longitude: {this.state.longitude}</p>

            <Map
              map_src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=10`}
              city={this.state.display_name}
            />
            < weather weather={this.state.weather} />
          </div>
        }

        {
          this.state.displayWeather &&
              <>
                <h2> City Name:{this.state.weather.city_name}</h2>
                <p> City longitude: {this.state.weather.lon}</p>
                <p>City latitude: {this.state.weather.lat}</p>

              </>


        } 

      </div>
    );
  }
}

export default App;
