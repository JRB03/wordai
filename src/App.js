import './style/App.css';
import { useState, useEffect } from 'react';

import words from './pop/words.js';

function App() {
  const [l1,setL1] = useState({l:' ',c:2});
  const [l2,setL2] = useState({l:' ',c:2});
  const [l3,setL3] = useState({l:' ',c:2});
  const [l4,setL4] = useState({l:' ',c:2});
  const [l5,setL5] = useState({l:' ',c:2});

  const [list,setList] = useState(words);

  const updateLetter = (l,e) => {
        if(!(e.key === 'Backspace' || e.code === 'Space' || ( e.which >= 65 && e.which <= 90 ) )) return;
    switch(l) {
      case 1:
        if(e.key === 'Backspace') setL1({c:l1.c,l:' '});
        else setL1({c:l1.c,l:e.key});
        break;
      case 2:
        if(e.key === 'Backspace') setL2({c:l2.c,l:' '});
        else setL2({c:l2.c,l:e.key});
        break;
      case 3:
        if(e.key === 'Backspace') setL3({c:l3.c,l:' '});
        else setL3({c:l1.c,l:e.key});
        break;
      case 4:
        if(e.key === 'Backspace') setL4({c:l4.c,l:' '});
        else setL4({c:l4.c,l:e.key});
        break;
      case 5:
        if(e.key === 'Backspace') setL5({c:l5.c,l:' '});
        else setL5({c:l5.c,l:e.key});
        break;
    }
    setList(words);
  }

  useEffect(() => {
    //update list
    let guess = [l1,l2,l3,l4,l5];
    let arr = [];
    let idx = 0;
    while(idx < list.length) {
      let ink = true;
      for(let n = 0; n < 5;n++) {
        let l = guess[n].l;
        let c = guess[n].c;

        if(l !== ' ' && c === 2 && list[idx].charAt(n) !== l) ink = false;
        if(l !== ' ' && c === 1 && !list[idx].includes(l)) ink = false;

      }
      if(ink) arr.push(list[idx]);
      idx++;
    }
    setList(arr);
  },[l1,l2,l3,l4,l5]);
  

  const changeColor = (l) => {

  };

  return (
    <div>
      <div className='boxes'>
        <p className='input' tabIndex='1' onKeyDown={ (e) => { updateLetter(1,e) } }>{l1.l}</p>
        <p className='input' tabIndex='2' onKeyDown={ (e) => { updateLetter(2,e) } }>{l2.l}</p>
        <p className='input' tabIndex='3' onKeyDown={ (e) => { updateLetter(3,e) } }>{l3.l}</p>
        <p className='input' tabIndex='4' onKeyDown={ (e) => { updateLetter(4,e) } }>{l4.l}</p>
        <p className='input' tabIndex='5' onKeyDown={ (e) => { updateLetter(5,e) } }>{l5.l}</p>
      </div>

      <div className='list'>
      {list.slice(0,30).map(w => <p>{w}</p>)}
      </div>
      
    </div>
  );
}

export default App;
