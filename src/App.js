import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000")
    .then(res => res.json())
    // .then(text => console.log(text))
    .then((jsonResponse) => { 
      setMessage(jsonResponse)
    }, (error) => {
      console.log('fail!')
    })
  
  })

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );

  }
export default App;
