import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('White')

  function red() {
    setColor('Red');
  }

  function blue() {
    setColor('Blue');
  }

  function green() {
    setColor('Green');
  }

  function pink() {
    setColor('deeppink');
  }

  function black() {
    setColor('Black');
  }

  function violet() {
    setColor('blueviolet');
  }

  return (
    <div className='h-screen' style={{ backgroundColor: color }}>
      <div className='fixed bottom-8 flex flex-wrap justify-around bg-yellow-400 gap-2 border-2 border-gray-200 rounded-full py-2 px-4 mx-[240px] shadow-lg'>
        <button className='py-2 px-8 bg-red-800 text-white rounded-full shadow-md' onClick={red}>Red</button>
        <button className='py-2 px-8 bg-blue-800 text-white rounded-full shadow-md' onClick={blue}>Blue</button>
        <button className='py-2 px-8 bg-green-800 text-white rounded-full shadow-md' onClick={green}>Green</button>
        <button className='py-2 px-8 bg-pink-800 text-white rounded-full shadow-md' onClick={pink}>Pink</button>
        <button className='py-2 px-8 bg-black text-white rounded-full shadow-md' onClick={black}>Black</button>
        <button className='py-2 px-8 bg-violet-800 text-white rounded-full shadow-md' onClick={violet}>Violet</button>
      </div>
    </div>
  )
}

export default App
