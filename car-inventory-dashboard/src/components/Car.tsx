import { cars } from '../pages/Cars';

export default function Car() {
  return (
    <>
      {cars.map((post) =>(
        <div key={post.id}>
          <h3>Car</h3>
          <p>{post.brand}</p>
          <p>{post.model}</p>
          <p>{post.year}</p>
        </div>
      ))}
    </>
  );
}