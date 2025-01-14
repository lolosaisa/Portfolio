import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import mylogo from './assets/images/mylogo.png'
import './styles/global.css';

import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import EmailLinks from './components/EmailLink';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Miniminds from './components/miniMinds';
import MizpaSafetyHouse from './components/mizpaSafety';
import ProjectList from './data/Otherprojects';
import GetInTouch from './components/GetinTouch';
import Afida from './components/Afida.';
import Experience from './components/Experience';

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <h1>Hello Network</h1>
    </div>
    
    
    <Navbar />
    <SocialLinks />
    <EmailLinks />
    <Hero />
    <AboutMe />
    <Experience />
    <MizpaSafetyHouse />
    <Miniminds />
    <Afida />

    <ProjectList />
    <GetInTouch />
    
     
     
    </>
  )
}

export default App
