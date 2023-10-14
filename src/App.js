import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const maxHistoryHeight = 200; // Define the maximum history height

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const calculationResult = eval(input);
        setHistory([...history, `${input} = ${calculationResult}`]);
        setResult(calculationResult.toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }

    // Check if history exceeds the maximum height and clear it
    const historyContainer = document.getElementById('history-container');
    if (historyContainer.scrollHeight > maxHistoryHeight) {
      setHistory([]);
    }
  };

  return (
    <div className="phone">
      <div className="calculator">
        <div id="history-container" className="history">
          {history.map((calculation, index) => (
            <div key={index}>{calculation}</div>
          ))}
        </div>
        <div className="display">{input || result}</div>
        <div className="buttons">
          <button onClick={() => handleButtonPress('7')}>7</button>
          <button onClick={() => handleButtonPress('8')}>8</button>
          <button onClick={() => handleButtonPress('9')}>9</button>
          <button onClick={() => handleButtonPress('+')}>+</button>
          <button onClick={() => handleButtonPress('4')}>4</button>
          <button onClick={() => handleButtonPress('5')}>5</button>
          <button onClick={() => handleButtonPress('6')}>6</button>
          <button onClick={() => handleButtonPress('-')}>-</button>
          <button onClick={() => handleButtonPress('1')}>1</button>
          <button onClick={() => handleButtonPress('2')}>2</button>
          <button onClick={() => handleButtonPress('3')}>3</button>
          <button onClick={() => handleButtonPress('*')}>*</button>
          <button onClick={() => handleButtonPress('0')}>0</button>
          <button onClick={() => handleButtonPress('.')}>.</button>
          <button onClick={() => handleButtonPress('/')}>/</button>
          <button onClick={() => handleButtonPress('C')}>C</button>
          <button onClick={() => handleButtonPress('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
