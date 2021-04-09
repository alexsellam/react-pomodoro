import logo from './logo.svg';
import './App.css';
import { useState  } from 'react';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

function App() {
  const [title, setTitle] = useState("Que le compte à rebours commence !")
  const [timeLeft, setTimeLeft] = useState(25 * 60)


  const minutes = padTime(Math.floor(timeLeft / 60)); 
  const seconds = padTime((timeLeft - minutes * 60));
  return (
    <div className="App">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
