import React from 'react'
import './App.css'
const App = () => {
  return (
    <>
       <div className='container'>
        <h2>Speech to Text Converter</h2>
        <p>A React hook that convert speech from microphone to text and make it available  to your React components.</p>

        <div className='main-content'>

        </div>

        <div className='btn-style'>
          <button>Copy to Clipboard</button>
          <button>Start Listening</button>
          <button>Stop Listening</button>
        </div>
       </div>
    </>
  )
}

export default App
