import React from 'react'
import Weatherchecker from './components/weatherchecker';

const App = () => {
  // fetch("https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=3dba6415f8c3b1cbf2b490da14e24cbf")
  //     .then((apiData)=>{
        
  //      return apiData.json()
  //     }).then(
  //       (apiDataNew)=>{console.log(apiDataNew)}
  //     ).catch((err)=>{console.log("errormessage")})
  return (
    <>
      <Weatherchecker/>

{/* 
      {
        "coord":{"lon":74.3436,"lat":31.5497},
        "weather":[{"id":711,"main":"Smoke","description":"smoke","icon":"50n"}],
        "base":"stations","main":{"temp":307.14,"feels_like":313.31,"temp_min":305.21,"temp_max":307.14,"pressure":997,"humidity":55},
        "visibility":5000,"wind":{"speed":2.57,"deg":120},
        "clouds":{"all":20},
        "dt":1659968104,"sys":{"type":1,"id":7585,"country":"PK","sunrise":1659918185,"sunset":1659966817},
        "timezone":18000,"id":1172451,"name":"Lahore","cod":200
      } */}



      
    </>
  )
}

export default App;
