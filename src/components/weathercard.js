import React,{useState,useEffect} from 'react'
const Weathercard = ({weatherInfoprop}) => { //yaha agar weatherInfo ko curly brackets mai na likha to run nai ho ga i think yeh is liye hai k weatherInfo myWeatherInfo ko show kr rahi jo k state hai...??
  const { 
    temperature,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
    sunrise
  }= weatherInfoprop //yeh object yaha is liye laye bcz agar na late to hame pora likhna parta.... weatherInfoprop.name wagera....but now khali name likho or kaam chalao...or is ko weatherInfoprop k equal is liye rakha bcz hum nai upar prop apna is name se rakha or upar prop ka name is liye yhe rakha bcz weatherchecker.js mai hum ne attribute ka name is se rakha........
  //converting seconds to real time
  var stime=sunset
  var mtime=new Date(stime*1000)
  var htime=`${mtime.getHours()}:${mtime.getMinutes()}`

  const [weatherNewIcon,setweatherNewIcon]=useState("")
  useEffect(()=>{
    if(weathermood){
      switch (weathermood) {
        case "Clouds":
          setweatherNewIcon("wi-day-cloudy");
          break;
          case "Haze":
          setweatherNewIcon("wi-fog");
          break;
          case "Clear":
          setweatherNewIcon("wi-day-sunny");
          break;
          case "Mist":
          setweatherNewIcon("wi-dust");
          break;
      
        default:
          setweatherNewIcon("wi-day-sunny");
          break;
      }
    }
  },[weathermood])
  return (
    <>
      {/*our temp card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherNewIcon}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temperature}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>

        <div className='date'>{new Date().toLocaleString()}</div>


        {/* our four column section */}
      <div className="extra-temp">
        <div className="temp-info-minmax">

          <div className="two-sided-section">
            <p>
              <i className={'wi wi-sunset'}></i>
            </p>
            <p className="extra-info-leftside">
              {htime}<br />
              Sunset
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={'wi wi-humidity'}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity}<br />
              Humidity
            </p>
          </div>
        </div>

        <div className="weather-extra-info">
          <div className="two-sided-section">
            <p>
              <i className={'wi wi-rain'}></i>
            </p>
            <p className="extra-info-leftside">
              {pressure}<br />
              Pressure
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={'wi wi-strong-wind'}></i>
            </p>
            <p className="extra-info-leftside">
              {speed}<br />
              Speed
            </p>
          </div>
        </div>
      </div>
        
      </article>
    </>
  )
}

export default Weathercard
