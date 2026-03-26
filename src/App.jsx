import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <span>Weather Dashboard Web App</span>
      <form>
        <input type="text" class="cityInput" placeholder="Enter city"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
      
  )
}

export default App
