import React, { useState } from 'react';

const UpdaterFunction = () => {
  const [count, setCount] = useState(0); // Initialize with a value

  const increment = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  };

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
};

export default UpdaterFunction;
