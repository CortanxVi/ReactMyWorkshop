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

  return (
    <div>
      {/* <img src={logo} alt="this is logoEiEi" /> */}
      <h1>Hello world <br />My name is Brian</h1>
      <h3>{el}</h3>
    </div>
  );
}

export default App;
