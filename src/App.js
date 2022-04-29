import './style/App.css';
import { useState, useEffect } from 'react';

import Guess from './components/Guess.js';

import words from './pop/words.js';
import popwords from './pop/popwords.js';

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
  const [list,setList] = useState(words);
  const [guess1,setGuess1] = useState([{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0}]);
  const [guess2,setGuess2] = useState([{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0}]);
  const [guess3,setGuess3] = useState([{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0}]);
  const [guess4,setGuess4] = useState([{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0}]);
  const [guess5,setGuess5] = useState([{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0},{l:' ',c:0}]);

  const numG = 3;
  const popBold = 4000; 
  const listSize = 69;

  const [dark, setDark] = useState(false);
  
  const elements = [];
  for(let i = 1; i <= numG; i++) {
    elements.push(document.getElementById('in1'+i));
    elements.push(document.getElementById('in2'+i));
    elements.push(document.getElementById('in3'+i));
    elements.push(document.getElementById('in4'+i));
    elements.push(document.getElementById('in5'+i));
  }

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
  const tabDown = () => {
    let i = elements.indexOf(document.activeElement);
    if(Math.floor(i/5) >= numG-1) i = i%5-5;
    elements[i + 5].focus();
  }
  const tabUp = () => {
    let i = elements.indexOf(document.activeElement);
    if(Math.floor(i/5) <= 0) i += elements.length;
    elements[i - 5].focus();
  }

  const initList = () => setList(words);
  const updateList = (g,n) => {
    //update guess lists
    let guess = [];
    let g1 = guess1;
    let g2 = guess2;
    let g3 = guess3;
    let g4 = guess4;
    let g5 = guess5;
    switch(n) {
      case 1:
        g1 = g;
        setGuess1(g);
        break;
      case 2:
        g2 = g;
        setGuess2(g);
        break;
      case 3:
        g3 = g;
        setGuess3(g);
        break;
      case 4:
        g4 = g;
        setGuess4(g);
        break;
      case 5:
        g5 = g;
        setGuess5(g);
        break;
    }
    guess = [...g1,...g2,...g3,...g4,...g5];

    //double letter dealing
    for(let i = 0; i < guess.length; i++) {
      guess.forEach(l => {
        if(l.l === guess[i].l && l.c > guess[i].c && guess[i].c === 0) guess[i] = { l: guess[i].l, c: 1};
      });
    };

    //use guesses to make list
    let arr = [];
    let idx = 0;
    while(idx < list.length) {
      let ink = true;
      for(let n = 0; n < guess.length;n++) {
        let l = guess[n].l;
        let c = guess[n].c;
        let r = n%5;

        if(l !== ' ' && c === 2 && list[idx].charAt(r) !== l) ink = false;
        else if(l !== ' ' && c === 1 && (!list[idx].includes(l) || list[idx].charAt(r) === l)) ink = false;
        else if(l !== ' ' && c === 0 && list[idx].includes(l)) ink = false;
      }

      if(ink) arr.push(list[idx]);
      idx++;
    }

    //set list
    setList(arr);
  }

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

  return (
    <div id='wordaI'>
      <div id='header'>
        <div id='info' onClick={() => {document.getElementById('blurb').classList.toggle('show')}}>{">info"}
          <text id='blurb'>{blurb}</text>
        </div>
        <h1 id='title'>Word.aI</h1>
        <a href='https://github.com/JRB03/wordai'>@JRB03 '22</a>
      </div>

      <div id='page' onKeyDown={e => {
         if(e.key === 'ArrowLeft') tabLeft();
         if(e.key === 'ArrowRight') tabRight();
         if(e.key === 'ArrowUp') tabUp();
         if(e.key === 'ArrowDown') tabDown();
         document.getElementById('g1').focus();
       }}>
        <div id='border-left' className='border'>
          <img id='bh' src ={bh}/>
          <img id='ge' src ={ge}/>
          <img id='ya' src ={ya}/>
          <img id='bs' src ={bs}/>
          <img id='bj' src ={bj} title="Ɛ>"/>
          <img id='gg' src ={gg}/>
        </div>

        <div id='content' >
         <label>[Enter]</label>
          <div id='boxes' >
            <Guess id='g1' num={1} initList={() => initList()} updateList={(g,n) => updateList(g,n)}/>
            <Guess id='g2' num={2} initList={() => initList()} updateList={(g,n) => updateList(g,n)}/>
            <Guess id='g3' num={3} initList={() => initList()} updateList={(g,n) => updateList(g,n)}/>
          </div>
          <div id='list'>
            {list.slice(0,listSize).map(w => {
              let arr = popwords.slice(0,popBold);
              if(arr.includes(w)) return <p className='word' style={{fontWeight: (dark) ? ("700") : ('600')}}>{w}</p>
              return <p className='word'>{w}</p>
            })}
          </div>
        </div>

        <div id='border-right' className='border'>
          <img id='ye' src={ye}/>
          <img id='bu' src={bu}/>
          <img id='gm' src ={gm} title="70 75 73 68 69 6E 20 70"/>
          <img id='bw' src ={bw}/>
          <img id='gs' src ={gs}/>
          <img id='br' src ={br} title="<3"/>
          <a id='mode' onClick={() => modeToggle()}>{(dark) ? ('> ☀ <') : ('> ☾ <')}</a>
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
