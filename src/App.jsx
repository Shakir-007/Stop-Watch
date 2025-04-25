import {useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  let timerRef = useRef(null)

  function startWatch() {
    timerRef.current = setInterval(() => {
      setTime(time =>time + 1)
    }, 1000)

    
  }
  function stopWatch() {
    clearInterval(timerRef.current)
    timerRef.current = null
  }
  function resetWatch() {
    stopWatch()
    setTime(0)
    
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-700'>
        <div>
          <h1 className='text-6xl text-white mb-8 font-bold'>Stop Watch : {time} </h1>
          
        </div>
        <div>
            <ul className='text-2xl flex flex-col  '>
              <button ref={timerRef} onClick={startWatch} className='bg-gray-900 my-4 text-white rounded-xl py-1 px-4 font-semibold'>Start</button>
              <button onClick={stopWatch} className='bg-gray-900 my-4 text-white rounded-xl py-1 px-4 font-semibold'>Stop</button>
              <button onClick={resetWatch} className='bg-gray-900 my-4 text-white rounded-xl py-1 px-4 font-semibold'>Reset</button>
            </ul>
          </div>

      </div>
    </>
  )
}

export default App
