import Container from 'react-bootstrap/Container';
import MakePost from './MakePost';


interface BodyProps {
    makePost: boolean,
    sidebar: boolean,
    children: JSX.Element | JSX.Element[]
}

export default function Body({makePost, children}: BodyProps) {
    return (
            <Container>
                {makePost && <MakePost />}
                {children}
            </Container>
    )
}