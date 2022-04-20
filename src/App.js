import './style/App.css';
import { useState, useEffect } from 'react';

import words from './pop/words.js';

import bh from './img/bh.png';
import bj from './img/bj.png';
import br from './img/br.png';
import bs from './img/bs.png';
import bu from './img/bu.png';
import bw from './img/bw.png';
import ge from './img/ge.png';
import gg from './img/gg.png';
import gm from './img/gm.png';
import gs from './img/gs.png';
import ya from './img/ya.png';
import ye from './img/ye.png';


function App() {
  const [l1,setL1] = useState({l:' ',c:0});
  const [l2,setL2] = useState({l:' ',c:0});
  const [l3,setL3] = useState({l:' ',c:0});
  const [l4,setL4] = useState({l:' ',c:0});
  const [l5,setL5] = useState({l:' ',c:0});
  const [not,setNot] = useState([]);

  const [exWidth,setExwidth] = useState('53px');
  const [exHeight,setExHeight] = useState('30px');

  const [list,setList] = useState(words);

  let elements = [];
  elements.push(document.getElementById('in1'));
  elements.push(document.getElementById('in2'));
  elements.push(document.getElementById('in3'));
  elements.push(document.getElementById('in4'));
  elements.push(document.getElementById('in5'));
  elements.push(document.getElementById('ex'));
  
  const tabRight = () => {
    let i = elements.indexOf(document.activeElement);
    if(i >= elements.length-1) i = -1;
    elements[i + 1].focus();
  }
  const tabLeft = () => {
    let i = elements.indexOf(document.activeElement);
    if(i <= 0) i = elements.length;
    elements[i - 1].focus();
  }

  const updateLetter = (l,e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      updateColor(l);
      return;
    }
    if(!(e.key === 'Backspace' || ( e.which >= 65 && e.which <= 90 ) )) return;
    switch(l) {
      case 1:
        if(e.key === 'Backspace') setL1({c:0,l:' '});
        else setL1({c:l1.c,l:e.key});
        break;
      case 2:
        if(e.key === 'Backspace') setL2({c:0,l:' '});
        else setL2({c:l2.c,l:e.key});
        break;
      case 3:
        if(e.key === 'Backspace') setL3({c:0,l:' '});
        else setL3({c:l3.c,l:e.key});
        break;
      case 4:
        if(e.key === 'Backspace') setL4({c:0,l:' '});
        else setL4({c:l4.c,l:e.key});
        break;
      case 5:
        if(e.key === 'Backspace') setL5({c:0,l:' '});
        else setL5({c:l5.c,l:e.key});
        break;
      case 6:
        if(e.key === 'Backspace') {
          setNot(not.filter((_,i) => i !== not.length-1))
        }
        else if(!not.includes(e.key)) setNot([...not,e.key]);
        else return;
        break;
    }
    setList(words);
  }

  const updateColor = (l) => {
    let c;
    switch(l) {
      case 1:
        c = l1.c
        if(c+1>2) c = -1;
        setL1({c:(c+1),l:l1.l});
        break;
      case 2:
        c = l2.c
        if(c+1>2) c = -1;
        setL2({c:(c+1),l:l2.l});
        break
      case 3:
        c = l3.c
        if(c+1>2) c = -1;
        setL3({c:(c+1),l:l3.l});
        break;
      case 4:
        c = l4.c
        if(c+1>2) c = -1;
        setL4({c:(c+1),l:l4.l});
        break;
      case 5:
        c = l5.c
        if(c+1>2) c = -1;
        setL5({c:(c+1),l:l5.l});
        break;
    }
    setList(words);
  }
  const setColor = (c) => {
    if(c.l === ' ' || c.c === 0) return '#afafaf';
    if(c.c === 1) return '#eed494';
    if(c.c === 2) return '#9ac8b7';
    };

  useEffect(() => {
    //update list
    let guess = [l1,l2,l3,l4,l5];
    not.forEach(l => {
      let inkn = true;
      guess.forEach(g => {
        if(l === g.l) inkn = false;
      });
      if(inkn) guess.push({c:0,l:l});
    });
    let arr = [];
    let idx = 0;
    while(idx < list.length) {
      let ink = true;
      let ex = [];
      for(let n = 0; n < guess.length;n++) {
        let l = guess[n].l;
        let c = guess[n].c;

        if(l !== ' ' && c === 2 && list[idx].charAt(n) !== l) ink = false;
        if(l !== ' ' && c === 1 && !list[idx].includes(l)) ink = false;
        if(l !== ' ' && c === 0) ex.push(l);
      }
      ex.forEach( l => {
        if(list[idx].includes(l)) ink = false;
      })
      if(ink) arr.push(list[idx]);
      idx++;
    }
    setList(arr);

    for(let i = 0; i <=5; i++) setColor(i);
  },[l1,l2,l3,l4,l5,not]);
  
  useEffect(() => {
    if(not.length <= 2) {
      setExwidth('53px');
      setExHeight('30px');
    }
    else {
      setExwidth('fit-content');
      setExHeight('fit-content');
    }
  },[not])

  return (
    <div class='wordaI' onKeyDown={e => {
      if(e.key === 'ArrowRight') tabRight();
      if(e.key === 'ArrowLeft') tabLeft();
    }}>
      <div id='header'>
        <h2></h2>
        <h1>Word.aI</h1>
        <b></b>
      </div>

      <div id='page'>
        <div id='border-left' className='border'>
          <img id='bh' src={bh}/>
          <img id='ge' src={ge}/>
          <img id='ya' src ={ya}/>
          <img id='bs' src ={bs}/>
          <img id='bj' src ={bj}/>
          <img id='gg' src ={gg}/>
        </div>

        <div id='content'>
          <div id='boxes'>
            <div id='inb'>
              <label>[Enter]</label>
              <div id='in'>
                <p className='input' id='in1' tabIndex='0' style={{background: setColor(l1)}} onKeyDown={ (e) => { updateLetter(1,e) } } onClick={()=> {updateColor(1)}}>{l1.l}</p>
                <p className='input' id='in2' tabIndex='0' style={{background: setColor(l2)}} onKeyDown={ (e) => { updateLetter(2,e) } } onClick={()=> {updateColor(2)}}>{l2.l}</p>
                <p className='input' id='in3'tabIndex='0' style={{background: setColor(l3)}} onKeyDown={ (e) => { updateLetter(3,e) } } onClick={()=> {updateColor(3)}}>{l3.l}</p>
                <p className='input' id='in4' tabIndex='0' style={{background: setColor(l4)}} onKeyDown={ (e) => { updateLetter(4,e) } } onClick={()=> {updateColor(4)}}>{l4.l}</p>
                <p className='input' id='in5' tabIndex='0' style={{background: setColor(l5)}} onKeyDown={ (e) => { updateLetter(5,e) } } onClick={()=> {updateColor(5)}}>{l5.l}</p>
              </div>
            </div>
            <div id='exb'>
              <label>exclude:</label>
              <p className='exclude' id='ex' tabIndex='0' style={{width: exWidth, height: exHeight}} onKeyDown={ (e) => { updateLetter(6,e) } }>{not.join(' ')}</p>
            </div>
          </div>
          <div className='list'>
            {list.slice(0,94).map(w => <p className='word'>{w}</p>)}
          </div>
        </div>

        <div id='border-right' className='border'>
          <img id='ye' src={ye}/>
          <img id='bu' src={bu}/>
          <img id='gm' src ={gm}/>
          <img id='bw' src ={bw}/>
          <img id='gs' src ={gs}/>
          <img id='br' src ={br}/>
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
