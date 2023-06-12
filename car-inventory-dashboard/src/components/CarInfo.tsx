export interface CarCardable{
    id: number,
    name: string,
    year: number,
    selling_price?: number,
    km_driven?: number,
    fuel?: string,
    seller_type?: string,
    transmission?: string,
    owner?: string,
    mileage?: string,
    engine?: string,
    max_power?: string,
    torque?: string,
    seats?: number
    
  }
  interface carProps{
    key:number,
    car:CarCardable
  }
  
  export default function CarCard(props:carProps) {
    
    
    
    return (
      <div>
      <h2>{props.car.name}</h2>
      <h3>${props.car.selling_price}</h3>
      <p>{props.car.mileage}</p>
      <p>{props.car.engine} engine</p>
      <p>{props.car.seats} seats</p>
      </div>
    )
  }