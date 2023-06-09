import Card from "react-bootstrap/Card"
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"

export interface Persona {
    id: string,
    name: string,
    image: string
}

export interface Persons {
    key: string,
    pers: Persona
}

export default function Person({pers}:Persons){
    const variant = 'Dark'
    return (
        <>
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text="light"
          className="gt mustang"
        >
        <Link to={`/person/${pers.id}`}>
          <Card.Header>{pers.id}</Card.Header>
        </Link>
          <Card.Body>
            <Card.Title>{pers.name}</Card.Title>
            <Image src={pers.image} />
          </Card.Body>
        </Card>
        </>
    )
}