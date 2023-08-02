import Input from './Input';
import Square from './Square';
import {useState} from 'react';


function App() {
  const [colorType, setColorType] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [toggle,setToggle]= useState(0);

  return (
    <div className="App">
      <Square 
        colorType={colorType}
        hexValue={hexValue}
        toggle={toggle}
      />
      <Input 
        colorType={colorType}
        setColorType={setColorType}
        setHexValue={setHexValue}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;
