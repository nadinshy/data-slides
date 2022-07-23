import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

const [dress, setDress] = useState(0);
const {id, description, image} = data[dress];


const previousDress = () => {
  setDress ((dress => {
    dress--;
    if (dress < 0){
      return data.length-1
    }
    return dress;
  }))
}

const nextDress = () => {
  setDress ((dress => {
    dress ++;
    if (dress > data.length -1) {
      dress=0;
    }
    return dress;
  }))
}

  return (
    <div>
<div className='container'>
  <h1>Choose your coctail dress</h1>
</div>
      <div className='container'>
     <h2>{id}-{description}</h2>
      </div>

      <div className='container'>
        <img src={image} width='450px' alt='dress'/>
      </div>

      <div className='container btn'>
        <button onClick={previousDress}>Previous</button>
        <button onClick={nextDress}>Next</button>
      </div>
      </div>

  );
}

export default App;
