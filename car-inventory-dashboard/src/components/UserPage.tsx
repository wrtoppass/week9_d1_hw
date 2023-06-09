import { useParams } from 'react-router-dom';
import InfoPage from '../pages/InfoPage';

export default function UserPage() {
  const { id } = useParams();

  return (
    <InfoPage endPoint={`/posts/${id}`} heading={`${id}'s Page`}/>
  );
}