import React from 'react';
import { Header, Content, Footer } from './components/func-components';
import Calendar from './components/class-components';

function App() {
  return ( 
      [<Header />,
      <p><center><Calendar /></center></p>,
      <Content />,
      <Footer />]
  );
}

export default App;