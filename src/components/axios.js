import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
  const [city,setCity]=useState(null);
  const [place,setPlace]= useState("Mumbai");

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=034df4b8266d10f910ddf73fe32612c4`)
    .then((res)=>{
      setCity(res.data);
      
       //console.log(place.weather[0].main);
      //console.log(res.data.weather[0].main);
    })
    .catch((e)=>{
      
    })
  },[place])
  return (
    <div>
      <div>
        <input
          className='bg-gray-100 border-2 border-gray-700'
          placeholder='Enter City'
           type='search'
           onChange={(e)=>setPlace(e.target.value)}
        />
      </div>
      {!city?<h1>Data Not Found!</h1>
      
       :<div className='align-center items-center '>
        <h1>{city.name}</h1>
       <h1>{city.main.temp}</h1>
       <h1>{city.weather[0].main}</h1>
       <h1>{city.wind.speed}</h1>
      </div>
     }
       
    </div>
  )
}

export default Axios
