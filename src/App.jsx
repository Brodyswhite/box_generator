import React,{useState} from 'react';
import BoxContext from './contexts/BoxContext';
import FormWrapper from './components/FormWrapper';
import BoxWrapper from './components/BoxWrapper';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [boxen,setBoxen] = useState([]);
  const [color,setColor] = useState("");

  return (
    <BoxContext.Provider value={{color,setColor,boxen,setBoxen}}>
      <FormWrapper />
      <BoxWrapper />
    </BoxContext.Provider>

  );
}

export default App;
