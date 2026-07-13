import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  let r = 'React'
  let rn = 'React Native'
  const el =(
    <div>
      Create Website & Mobile Apps<br />
      with {r} & {rn}
    </div>
  );

  const h1Style = {
    backgroundColor: 'cyan',
    textAlign: 'Center',
    color: 'red',
    fontSize: 'larger',
    padding: '3px',
  };

  return (
    <div>
      <h1 style={h1Style}>Hello React</h1>
    </div>
  );
}

export default App;
