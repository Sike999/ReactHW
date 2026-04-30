const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
import '../styles/WeatherWidget.css'
import { useEffect, useState, useRef} from 'react'
export default function WeatherWidget(){
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('Tyumen');
    const [weather, setWeather] = useState(null);
    const [errMessage, setErrMessage] = useState(null)
    const [inputValue, setInputValue] = useState('Tyumen')
    const unluckyCities = useRef([])
    useEffect(() => {
        const abortController = new AbortController();
        const fetchWeather = async () => {
            setErrMessage(null)
            setLoading(true);
            const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,{signal: abortController.signal})
            const data = await responce.json()

            if(responce.status != 200){
                unluckyCities.current.push(city);
                setLoading(false)
                setInputValue('')
                setErrMessage(`Unable to get data for city ${city}`)
                return 
            }
            setWeather(data)
            setLoading(false)
        }
        fetchWeather()
        return () => {
            abortController.abort(); 
            /* при первом рендере происходит ошибка WeatherWidget.jsx:31 Uncaught (in promise) AbortError: signal is aborted without reason at WeatherWidget.jsx:31:29
               это потому что неизбежно вызывается cleanup при рендере? это нормально или нет?
            */
        }
    },[city])

    return(
        <div className="weatherBlock">
            {loading ? (<img src="/loading.gif" alt='loading' style={{margin:"30px 0 0 20px"}}/>) :
             weather ? (
                <div>
                    <span style={{display:"flex",margin:"10px"}}>{weather.name}</span>
                    <div style={{fontSize:"22pt",margin:"20px"}}> {(weather.main.temp / 33.8).toFixed(0)}℃</div>
                    <div style={{fontSize:"16pt",margin:"20px"}}>{weather.weather[0].description} </div>
                    <img style={{width:"110px",height:"90px",marginRight:"70px"}} src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}/>
                    <input style={{margin:"4px",width:"200px"}} value={inputValue} type="text" className='addButtonAlt' onChange={(e) => {setInputValue(e.target.value)}}/>
                    <button style={{margin:"4px",width:"206px"}} className='addButtonAlt' onClick={() => {unluckyCities.current.includes(inputValue) ? setErrMessage('This city not gonna fetch') : setCity(inputValue)}}>Submit</button>
                    {errMessage &&(<div style={{color:"red",fontSize:"11pt"}}>{errMessage}</div>)}
                </div>
            ) : (
                <div>
                    <span style={{display:"flex",margin:"10px"}}>{city}</span>
                    <input style={{margin:"4px",width:"200px"}} value={inputValue} type="text" className='addButtonAlt' onChange={(e) => {setInputValue(e.target.value)}}/>
                    <button style={{margin:"4px",width:"206px"}} className='addButtonAlt' onClick={() => {unluckyCities.current.includes(inputValue) ? setErrMessage('This city not gonna fetch') : setCity(inputValue)}}>Submit</button>
                    {errMessage &&(<div style={{color:"red",fontSize:"11pt"}}>{errMessage}</div>)}
                </div>
            )}
        </div>
    )
}