import React, {useState, useEffect} from 'react'
import "./weatherchecker.css"
import Weathercard from './weathercard'
const Weatherchecker = () => {
  const [searchValue, setSearchValue]=useState("lahore")
  useEffect(()=>{getWeatherInfo()},[])
  const [myWeatherInfo,setmyWeatherInfo]=useState("")

  const getWeatherInfo=async()=>{
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3dba6415f8c3b1cbf2b490da14e24cbf`
      const response=await fetch(url)
      const data=await response.json()
      const {temp:temperature,humidity,pressure}=data.main
      const {main:weathermood}=data.weather[0]
      const{name}=data
      const{speed}=data.wind
      const{country,sunset,sunrise}=data.sys

      const myNewWeatherInfo={
        temperature,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        sunrise
      }
      setmyWeatherInfo(myNewWeatherInfo)
      // return data
    }catch(error){
      console.log(`Error:${error}`)
    }
  }
  // getWeatherInfo().then((er)=>{
  //   console.log(er)
  //})
  return (
    <>
      <div className="wrap">
        <div className="search">
            <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
            <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      <Weathercard weatherInfoprop={myWeatherInfo}></Weathercard>
    </>
  )
}

export default Weatherchecker
