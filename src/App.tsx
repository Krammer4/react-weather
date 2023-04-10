import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import logo from './Img/logo.jpg'
import { Main } from './Components/Main';
import { IResponse } from './Interfaces/Interfaces';



function App() {


  const [currentCity, setCurrentCity] = useState("")
  const [currentWeather, setCurrentWeather] = useState<IResponse>({})
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [cityInputValue, setInputCityValue] = useState<string>("")
  const [headerValue, setHeaderValue] = useState<string>("")

  const [counterForImg, setCounterForImg] = useState<number>(0)

  const [undefiendCity, setUndefiendCity] = useState(false)

  const setCity = () =>{
    setCurrentCity(cityInputValue)
    setCounterForImg((prev)=>prev+1)

    cityInputValue == '' && setIsLoaded(false)

    setHeaderValue(cityInputValue)
    setInputCityValue('')
    
  }
  
  useEffect(()=>{
    if(currentCity){
      const cityStorageData = JSON.parse(localStorage.getItem('city') || '' )
     if(cityStorageData !== ''){
      setCurrentCity(cityStorageData)
     }
    }
   
  },[])

  useEffect(()=>{
    localStorage.setItem('city', JSON.stringify(currentCity))
  }, [currentCity])

  async function getWeatherFromAPI (){

        try {
          const response: any = await axios.get<IResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=ru&units=metric&appid=152b7f66c2df2dc3d5b721c565ed70e6`);
        setCurrentWeather(response.data)
        setIsLoaded(true)
        setUndefiendCity(false)
        setCounterForImg((prev)=>prev+1)
        } catch (error) {
          console.log("Expected error:", error)
          setHeaderValue("")
          setUndefiendCity(true)
        }
    
        
  }

  useEffect(()=>{
    try{
        getWeatherFromAPI()
    }
    catch(e){
      console.log('Error:', e)
    }
    
    
  }, [currentCity])


  return (
    <div className="bg-bg py-5 px-8 min-h-screen flex-col">
    
    <div className='flex md:justify-between items-center sm:justify-center'>
    <div className='flex items-center'>
      <img className="main-logo md:block sm: hidden" src={logo}/>
     <p className='text-white font-black text-4xl pl-3 lg:block sm:hidden'>KRAMMER WEATHER</p>
    </div>


    <div className="flex items-center">
      <input className="text-center md:px-20 xm:px-2 sm:px-0 py-2 rounded-tl-3xl rounded-bl-3xl md:text-lg sm:text-base focus:outline-yellowMain" value={cityInputValue} onChange={((e)=>{
        setInputCityValue(e.target.value)
      })}
      onKeyDown={(e)=>{
        if(e.key == 'Enter'){
          setCity()
        }
      }}
      placeholder="Введите город"/>
      <button className="bg-yellowMain text-black font-extrabold py-2 px-4 rounded-tr-3xl rounded-br-3xl focus:border-yellow active:outline-0 ms:text-lg sm:text-base" onClick={setCity}>Найти</button>
    </div>

    </div>


    <Main city={currentCity} isLoaded={isLoaded} weather={currentWeather} inputValue={cityInputValue} counter={counterForImg} undefiendCity={undefiendCity} headerValue={headerValue} counterForImg={counterForImg}/>

    </div>
  );
}

export default App;
