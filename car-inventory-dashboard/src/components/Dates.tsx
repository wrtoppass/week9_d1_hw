import { useState } from 'react';

const Dates = () => {
  const [displayDate, setDisplayDate] = useState('');

  const handleClick = () => {
    const currentDate = new Date();
    setDisplayDate(currentDate.toLocaleString());
  };

  return (
    <div>
      <button onClick={handleClick}>Display Date</button>
      {displayDate && <p>{displayDate}</p>}
    </div>
  );
};

export default Dates;
