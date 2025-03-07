import { useState } from 'react'
import Login from './Pages/Login'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-red-500'>BISMILLAH GESS!!</h1>
    <h2 className='text-9xl'>halo</h2>
    <Login />
    </>
  )
}

export default App
