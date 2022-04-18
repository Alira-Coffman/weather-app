import {React, useState} from "react"
import fetcher from "../../utils/fetcher"
import useSWR from "swr";
import mockData from "./mockData.json"
import { Image } from "react-bootstrap";
export default function DailyWeather({lat, long})
{
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=`;
  console.log(url);
  const {data, error} = useSWR(url, fetcher);
  console.log(data);
  // const [data,setData]=useState([]);
  // const getData=()=>{
  //   fetch(mockData
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setData(myJson)

  //     });
  // }
 
  
    return(
        <>
         {/* <p>Latitude: {lat}</p>
        <p>Longitude: {long}</p> */}
        {
          lat && long ? <div className="container mt-5">
          <div className="shadow-lg p-3 mb-5 rounded bg-blue-violet text-white">
            <div className="d-flex justify-content-space-between">
            <Image src={`http://openweathermap.org/img/wn/${mockData?.current.weather[0].icon}.png`} alt="" />
              <span className="fs-1">{mockData?.current.temp}&deg;F</span>
            </div>
            <div className="d-flex flex-column">
              <span>{mockData?.current.weather[0].description}</span>
              <span>{new Date().toLocaleString() + ''}</span>
            </div>
            
         
          </div>
         </div> : 'nothing to display'
        }
       
       
        </>
   )
}