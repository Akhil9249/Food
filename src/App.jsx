import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import HeadlineCards from './componets/HeadlineCards'
import Food from './componets/Food'
import Category from './componets/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <HeadlineCards/>
   <Food/>
   <Category/>

    </>
  )
}

export default App
