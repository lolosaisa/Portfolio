import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import mylogo from './assets/images/mylogo.png'
import './styles/global.css';

import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import EmailLinks from './components/EmailLink';

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar />
    <SocialLinks />
    <EmailLinks />
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={mylogo} className="logo" alt="my logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
