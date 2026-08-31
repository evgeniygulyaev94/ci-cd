import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)

    return (
        <div>
            <h1 style={{fontSize: 70, color: 'red'}}>value = {count}</h1>
            <button
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: 15,
                    cursor: 'pointer',
                }}
                onClick={increment}
            >
                increment
            </button>
        </div>
    )
}

export default App
