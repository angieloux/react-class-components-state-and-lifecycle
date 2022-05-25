import React, {Component} from 'react';
import Clock from './Clock.jsx';


class App extends Component {
  // constructor method runs
  constructor(props) {
    super(props)
    // define a state
    this.state = {latitude: null, errorMessage: ''}
    console.log("CONSTRUCTOR IS RUNNING")

    // api call is made asynchronously & latitude value is null
    // once it is completed, the latitude value changes
    // because the state has now changed, the page will re-render with the new latitude value
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      error => this.setState({errorMessage: error.message})
      )
   
  }

    isitWarm() {
      console.log("IS IT WARM")
      const {latitude} = this.state
      const month = new Date().getMonth()

      // return true if, where the user is is calculated to be: 
        // between May and September and in the Northern hemisphere, OR
        // between October and April and in the Southern Hemisphere, OR 
        // at the equator 
      return (((month > 4 && month <= 9) && latitude > 0) || ((month <= 4 && month > 9) && latitude > 0) || latitude === 0) ? true : false
  }

    getClockIcon() {
      if (this.isItWarm()) {
        return  "summer.png" 
      } 
      return "winter.png"
  }


    render(){
      const {latitude, errorMessage} = this.state
      return (
      <div>
        <h1>{latitude}</h1>
          {errorMessage ||
            <Clock 
              date={new Date()}
              icon={latitude ? this.getClockIcon() : null }
            />
          }
      </div>
      )
    }
}

export default App;


// 1. The App component is created
// 2. Make an API call to retrieve the location. 
// 3. Since this is async, the code continues and the HTML element/s is/are returned--> at this point in time, the position value is null(because it takes time for the API call). This is why you would have to set a state (done above).


// const App = () => {
//   // let position = null 
//   // // make API call
//   // // API calls are asynchronous
//   //   window.navigator.geolocation.getCurrentPosition(
//   //     position => console.log(position),
//   //     error => console.log(error)
//   //   )

//   // // return the HTML element
//   // return (
//   //   <div>
//   //     <h1>{position}</h1>
//   //     <Clock date={new Date()} />
//   //   </div>
    
    
    
//   // )
// }


