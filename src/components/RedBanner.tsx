import { IoIosClose,IoMdTime } from "react-icons/io";
// @ts-expect-error - CSS import
import '../styles/RedBanner.css'
import { useEffect, useState, useRef } from "react";
import { IoStop,IoPlay, } from "react-icons/io5";
import { MdOutlineRestartAlt } from "react-icons/md";
export default function RedBanner({ setShowBanner } : {setShowBanner: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [playFlag, setPlayFlag] = useState<boolean>(true)

    const initialTime = useRef<number>(3599000)
    const [time,setTime] = useState<number | string>(initialTime.current)
    const intervalRef = useRef<number | null>(null);
    const timeRef = useRef<number>(initialTime.current)
    const [isTimerOut, setIsTimerOut] = useState<boolean>(false)
    useEffect(() => {
        if (playFlag && timeRef.current > 0) {
            intervalRef.current = setInterval(() => {
                timeRef.current -= 1000;
                setTime(timeRef.current)
                if(timeRef.current <= 0) {
                    clearInterval(intervalRef.current || undefined)
                    setTime('Timer is out')
                    setIsTimerOut(true)
                    setPlayFlag(false)
                }
            },1000)
        }
        return () => clearInterval(intervalRef.current || undefined)
    },[playFlag])
    

    const handleReset = () => {
        if(isTimerOut){
            setTime(initialTime.current)
            timeRef.current = initialTime.current
            setPlayFlag(true)
            setIsTimerOut(false)
            return
        }
        if(playFlag){
            setTime(initialTime.current)
            timeRef.current = initialTime.current
            return
        }
        setTime(initialTime.current)
        timeRef.current = initialTime.current
    };

    return(
        <div className="redBanner">
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop:"12px"}}>
                <IoMdTime size={22} className="timeIcon"/>
                <IoIosClose onClick={() => (setShowBanner(false))} size={26} className="close"/>
                <p className="pBanner" style={{fontSize:"16px"}}>Special Deal!</p>
            </div>
            <p className="pBanner">Register now to unlock exclusive offers and discounts</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <p className="pBanner">Offer expires in: {!isTimerOut ? new Date(time).toISOString().substring(11, 19) : time}</p> 
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px',margin:"0 auto"}}>
                {playFlag ? <IoStop style={{cursor:"pointer"}} color={isTimerOut ? 'gray' : '#FFFFFF'} onClick={isTimerOut ? () => {} : () => (setPlayFlag(false))}/> : <IoPlay style={{cursor:"pointer"}} color={isTimerOut ? 'gray' : '#FFFFFF'} onClick={isTimerOut ? () => {} : () => (setPlayFlag(true))}/>}
                <MdOutlineRestartAlt style={{cursor:"pointer"}} onClick={() => (handleReset())}/>
            </div>
        </div>
    )
}