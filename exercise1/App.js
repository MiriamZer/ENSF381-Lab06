import React from 'react';

function App() {
  let currentYear = new Date();
  let isLoggedIn = false;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear.getFullYear()}</p> 
      
      {
        isLoggedIn == true? <p>Welcome back!</p> : <p>Please log in.</p>
      }

    </div>
  );

}


export default App;
