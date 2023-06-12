import { useState, useEffect } from 'react'
import { CarCardable } from '../components/CarCard';
import { useParams } from "react-router-dom";
import CarCard from '../components/CarCard';

export default function SingleCarPage() {

    // Get the base API URL from environment variables
    const base_api_url = import.meta.env.VITE_APP_BASE_API

    // Get the carID parameter from the URL
    const { carID } = useParams()

    // Define a state variable to store the car data
    const [car, setCar] = useState<CarCardable>({ id: 0, name: '', year: 0 })

    useEffect(() => {
        (async () => {
            // Fetch the car data from the API
            const res = await fetch(`${base_api_url}/${carID}`)
            if (res.ok) {
                // If the response is successful, parse the data and update the car state
                const data = await res.json()
                setCar(data)
            }
        })()
    }, [carID])

    return (
        <>
            {/* Render the CarCard component with the car data */}
            <CarCard car={car} key={car.id} />
        </>
    )
}
