import './style/App.css';
import { useState, useEffect } from 'react';

import words from './pop/words.js';
import popwords from './pop/popwords.js'

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

import bhd from './img/bhd.png';
import bjd from './img/bjd.png';
import brd from './img/brd.png';
import bsd from './img/bsd.png';
import bud from './img/bud.png';
import bwd from './img/bwd.png';
import ged from './img/ged.png';
import ggd from './img/ggd.png';
import gmd from './img/gmd.png';
import gsd from './img/gsd.png';
import yad from './img/yad.png';
import yed from './img/yed.png';


function App() {
  const [l1,setL1] = useState({l:' ',c:0});
  const [l2,setL2] = useState({l:' ',c:0});
  const [l3,setL3] = useState({l:' ',c:0});
  const [l4,setL4] = useState({l:' ',c:0});
  const [l5,setL5] = useState({l:' ',c:0});
  const [not,setNot] = useState([]);
  const [dark, setDark] = useState(false);

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
  
  useEffect(()=>{document.getElementById('in1').focus()},[]);

  let blurb = "Welcome!                                                                                                  x\n" +
    "Word.ai will take your Wordle guess/input (the five boxes and exclude),\n" +
    " and give you the best options for your next guess!\n\n" +
    "Use [tab], [<], [>], or click to select a box.\n" +
    "Use your keyboard to type in a letter.\n" +
    "Use [Enter], [Space], or click to change a box's color.\n\n" +
    "The bold words are more popular\n (and so potentially more likely to be the Wordle).\n\n"+
    "This github project is linked at the top right of the page."

  const modeToggle = () => {
    document.getElementById('wordaI').classList.toggle('dark');
    document.getElementById('title').classList.toggle('dark');
    document.getElementById('list').classList.toggle('dark');
    document.getElementById('mode').classList.toggle('dark');
    setDark(!dark);
  };

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
    if( l < 6 && (e.key === 'Enter' || e.key === ' ')) {
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
        if(c+1>2 || l1.l === ' ') c = -1;
        setL1({c:(c+1),l:l1.l});
        break;
      case 2:
        c = l2.c
        if(c+1>2 || l2.l === ' ') c = -1;
        setL2({c:(c+1),l:l2.l});
        break
      case 3:
        c = l3.c
        if(c+1>2 || l3.l === ' ') c = -1;
        setL3({c:(c+1),l:l3.l});
        break;
      case 4:
        c = l4.c
        if(c+1>2 || l4.l === ' ') c = -1;
        setL4({c:(c+1),l:l4.l});
        break;
      case 5:
        c = l5.c
        if(c+1>2 || l5.l === ' ') c = -1;
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
    let guess = [];
    let ing = [l1,l2,l3,l4,l5];
    //adds enter inputs
    ing.forEach(l => {
      let inki = true;
      let c = l.c;
      ing.forEach(g => {
        if(l.l === g.l && g.c > l.c && l.c === 0) c = 4;
      });
      guess.push({c:c,l:l.l});
    });
    //adds exclusion inputs
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
        if(l !== ' ' && c === 1 && (!list[idx].includes(l) || list[idx].charAt(n) === l)) ink = false;
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
    <div id='wordaI' onKeyDown={e => {
      if(e.key === 'ArrowRight') tabRight();
      if(e.key === 'ArrowLeft') tabLeft();
    }}>
      <div id='header'>
        <div id='info' onClick={() => {document.getElementById('blurb').classList.toggle('show')}}>{">info"}
          <text id='blurb'>{blurb}</text>
        </div>
        <h1 id='title'>Word.aI</h1>
        <a href='https://github.com/JRB03/wordai'>@JRB03 '22</a>
      </div>

      <div id='page'>
        <div id='border-left' className='border'>
          <img id='bh' src={bh}/>
          <img id='ge' src={ge}/>
          <img id='ya' src ={ya}/>
          <img id='bs' src ={bs}/>
          <img id='bj' src ={bj} title="Ɛ>"/>
          <img id='gg' src ={gg}/>
        </div>

        <div id='content'>
          <div id='boxes'>
            <div id='inb'>
              <label>[Enter]</label>
              <div id='in'>
                <p className='input' id='in1' tabIndex='0' style={{background: setColor(l1)}} onKeyDown={ (e) => { updateLetter(1,e) } } onClick={()=> {updateColor(1)}}>{l1.l}</p>
                <p className='input' id='in2' tabIndex='0' style={{background: setColor(l2)}} onKeyDown={ (e) => { updateLetter(2,e) } } onClick={()=> {updateColor(2)}}>{l2.l}</p>
                <p className='input' id='in3' tabIndex='0' style={{background: setColor(l3)}} onKeyDown={ (e) => { updateLetter(3,e) } } onClick={()=> {updateColor(3)}}>{l3.l}</p>
                <p className='input' id='in4' tabIndex='0' style={{background: setColor(l4)}} onKeyDown={ (e) => { updateLetter(4,e) } } onClick={()=> {updateColor(4)}}>{l4.l}</p>
                <p className='input' id='in5' tabIndex='0' style={{background: setColor(l5)}} onKeyDown={ (e) => { updateLetter(5,e) } } onClick={()=> {updateColor(5)}}>{l5.l}</p>
              </div>
            </div>
            <div id='exb'>
              <label>exclude:</label>
              <p className='exclude' id='ex' tabIndex='0' style={{width: exWidth, height: exHeight}} onKeyDown={ (e) => { updateLetter(6,e) } }>{not.join(' ')}</p>
            </div>
          </div>
          <div id='list'>
            {list.slice(0,82).map(w => {
              let arr = popwords.slice(0,3000);
              if(arr.includes(w)) return <p className='word' style={{fontWeight: (dark) ? ("700") : ('600')}}>{w}</p>
              return <p className='word'>{w}</p>
            })}
          </div>
        </div>

        <div id='border-right' className='border'>
          <img id='ye' src={(!dark) ? ye : yed}/>
          <img id='bu' src={bu}/>
          <img id='gm' src ={gm} title="70 75 73 68 69 6E 20 70"/>
          <img id='bw' src ={bw}/>
          <img id='gs' src ={gs}/>
          <img id='br' src ={br} title="<3"/>
          <a id='mode' onClick={() => modeToggle()}>{(dark) ? ('>Light Mode<') : ('>Dark Mode<')}</a>
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
