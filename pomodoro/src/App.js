import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

function App() {
  const [title, setTitle] = useState("Que le compte à rebours commence !")
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const intervalRef = useRef(null);  

  function startTimer(){
    setTitle("C'est parti !")
    intervalRef.current  = setInterval (() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;
        // reset the timer
        return 0; 
      });
    }, 1000);
  }

  function stopTimer(){

    clearInterval(intervalRef.current)
    setTitle("Ne lache rien ! Continue ! ")
  }

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
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
