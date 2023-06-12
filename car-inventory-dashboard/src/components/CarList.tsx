import {useState, useEffect} from 'react'
import { CarCardable } from "./CarCard";
import CarCard from './CarCard';
import Sidebar from './Sidebar'


const base_api_url = import.meta.env.VITE_APP_BASE_API




export default function CarList() {
    const [carArray, setCarArray] = useState<CarCardable[]>([])
    
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`${base_api_url}`)
            if(res.ok){
                const data = await res.json()
                setCarArray(data)
            }
        })()
    },[])


  return (
    
    <div>
    <Sidebar/>
        {carArray.map((car)=>{
            return <CarCard car={car} key={car.id} />
        })}
    </div>
    
    
  )
}