import React, {FC, useEffect, useState} from 'react'
import { IMainProps } from '../Interfaces/MainInterfaces'

import sunny from "../Img/sunny.jpg"
import cloudy from "../Img/clouds.jpg"
import sunAndClouds from "../Img/sunAndClouds.jpg"
import snow from "../Img/snow.jpg"
import rain from "../Img/rain.jpg"
import haze from "../Img/haze.jpg"


export const Main: FC<IMainProps> = ({isLoaded, weather, inputValue, counter, undefiendCity, headerValue, counterForImg }) => {

    const [weatherImg, setWeatherImg] = useState<string>("")



    // Creating states for temperature and consts to define temperature condition to change text-color
    const celcium = Number(weather?.main?.temp.toFixed(0))
    const hot = celcium >= 25
    const warm =  celcium < 25 && celcium >= 15
    const normal = celcium <15 && celcium > 0
    const cold = celcium <= 0 && celcium > -15
    const extraCold = celcium <= -15

    // Creation of Date logic
    var date = new Date();
    let hours = date.getUTCHours()
    let minutes = date.getUTCMinutes()
    let [currentHours, setCurrentHours] = useState(hours)
    let [currentMinutes, setCurrentMinutes] = useState(minutes)

    useEffect(()=>{
        if(isLoaded){
            if(weather?.weather[0].main == 'Clouds'){
                if(weather?.weather[0].description == "облачно с прояснениями"){
                    setWeatherImg(sunAndClouds)
                }
                else{
                    setWeatherImg(cloudy)
                }
            }
            else if(weather?.weather[0].main == 'Clear'){
                setWeatherImg(sunny)
            }
            else if(weather?.weather[0].main == 'Snow'){
                setWeatherImg(snow)
            }
            else if(weather?.weather[0].main == 'Rain'){
                setWeatherImg(rain)
            }
            else if(weather?.weather[0].main == 'Haze'){
                setWeatherImg(haze)
            }
            else{
                setWeatherImg("")
            }
        }

    }, [counterForImg])


    
   
   

  return (
    <div className="pt-10">
        {isLoaded ? undefiendCity ? <h1 className="text-white text-4xl font-black md:text-start sm:text-center">Город не найден...</h1>  : <div>
           
                <h1 className='text-white prem:text-6xl sm:text-5xl font-black sm:text-center prem:text-start prem:break-normal sm:break-words'>{headerValue.toUpperCase()}</h1>
                
          
            <div className="flex pt-10 lg:flex-row sm:flex-col">

            <div className="bg-white flex flex33 prem:flex-row sm:flex-col md:justify-normal prem:justify-between sm:justify-center lg:mr-8 rounded-2xl py-6 items-center lg:pr-4 sm:mr-0 ">
                <img className="md:max-w-[260px] sm:max-w-[180px] rounded-2xl prem:pl-4 sm:pl-0" src={weatherImg}   />

                <div className="prem:pl-20 prem:pr-16 sm:pl-0 prem:text-start sm:text-center">
                    {hot && <p className={`text-6xl text-orange-700 prem:pt-0 sm:pt-6`}>{celcium}°C</p>}
                    {warm && <p className={`text-6xl text-yellow-600 prem:pt-0 sm:pt-6`}>{celcium}°C</p>}
                    {normal && <p className={`text-6xl prem:pt-0 sm:pt-6`}>{celcium}°C</p>}
                    {cold && <p className={`text-6xl text-blue-500 prem:pt-0 sm:pt-6`}>{celcium}°C</p>}
                    {extraCold && <p className={`text-6xl text-blue-950 prem:pt-0 sm:pt-6`}>{celcium}°C</p>}
                    <p className="font-black text-3xl prem:pt-10 sm:pt-4">{weather?.weather[0].description[0].toUpperCase()}{weather?.weather[0].description.slice(1)}</p>
                   
                </div>
            </div>

            <div className="flex flex66 bg-white rounded-2xl px-6 py-5 lg:mt-0 sm:mt-4 prem:text-start sm:text-center">
                    <div className="flex flex-col justify-center">
                        <p className="additional-info">Температура: {celcium} °C</p>
                        <p className='additional-info'>Ощущается, как: {weather?.main?.feels_like.toFixed(0)} °C</p>
                        <p className='additional-info'>Скорость ветра: {weather?.wind?.speed.toFixed(1)} м/с</p>
                        <p className='additional-info'>Влажность: {weather?.main?.humidity}%</p>
                    </div>
                </div>

            </div>
            
            
            
            
            </div>
        
        
        
        
            : 
            <p className="text-white text-4xl font-black md:text-start sm:text-center">Введите свой город для просмотра прогноза погоды на день.</p>}
    </div>
  )
}
