import React, { useState } from "react";
import { useEffect } from 'react'
function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert("Button Clicked")
  })
  return (
    <>
      <button onClick={() => {
        setNum(num + 1);
      }}>Click Me {num}</button>

    </>
  );
}

export default App;
