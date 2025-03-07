import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  const homeTitle = "Homepage"
  const homeDesc = "Welcome to our website."
  const aboutTitle = "About Us"
  const aboutDesc = "We are passionate about delivering quality experiences."
  const contactTitle = "Contact Us"
  const contactDesc = "Feel free to reach out to us via email or phone."  

  return (
    <div>

      <Home title={homeTitle} desc={homeDesc}/>
      <About title={aboutTitle} desc={aboutDesc}/>
      <Contact title={contactTitle} desc={contactDesc}/>

    </div>
  );

}


export default App;
