import React, { useState } from 'react'

const User = ({name}) => {
    const [count] = useState(0);
    const[count2] = useState(1);
  return (
    <div className='user-card'>
        <h2>Count:{count}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: Chennai</h3>
        <h4>Contact: arun99kumar.d@gmail.com</h4>
    </div>
  );
};

export default User;