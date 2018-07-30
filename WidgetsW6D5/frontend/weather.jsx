import React from 'react';

class Weather extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      weather: undefined
    };
  }

  render(){
    if (this.state.weather) {
      return (
        <div className="box weather">
          <p>{ this.state.weather.name }</p>
          <p>{ this.state.weather.main.temp } Celsius</p>
        </div>
      );
    } else {
      return (
        <div className="box weather"><p>Loading...</p></div>
      );
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      const apiKey = '077861841fa9a2ade7a0321993cae8a9';
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`;

      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        //ready state of DONE means this is complete
        if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
          const data = JSON.parse(xmlhttp.responseText);
          this.setState({ weather: data });
        }
      };

      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    });
  }
}


export default Weather;
