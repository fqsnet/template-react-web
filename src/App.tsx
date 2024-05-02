import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useBearStore } from './store'
import { NavLink, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  function TestStore() {
    const bears = useBearStore(state => state.bears)
    const increasePopulation = useBearStore(state => state.increase)

    return (
      <div>
        <h1>{bears} around here...</h1>
        <button onClick={() => increasePopulation(1)}>Add a bear</button>
      </div>
    )
  }

  function Home() {
    return <>Home</>
  }

  function Settings() {
    return <>Settings</>
  }

  function About() {
    return <>About</>
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      {TestStore()}

      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink to="">首页</NavLink>
        <NavLink
          to={{
            pathname: '/settings',
            search: '?sort=date',
            hash: '#hash'
          }}
        >
          产品
        </NavLink>
        <NavLink to="about">关于</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
