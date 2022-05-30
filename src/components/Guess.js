import '../style/Guess.css';
import { useState, useEffect } from 'react';

import words from '../pop/words.js';
import { wait } from '@testing-library/user-event/dist/utils';

const Guess = (props) => {
   const [l1,setL1] = useState({l:' ',c:0});
   const [l2,setL2] = useState({l:' ',c:0});
   const [l3,setL3] = useState({l:' ',c:0});
   const [l4,setL4] = useState({l:' ',c:0});
   const [l5,setL5] = useState({l:' ',c:0});

   const updateLetter = (l,e) => {
    if( l < 6 && (e.key == 'Enter' || e.key === ' ')) {
      updateColor(l);
      return;
    }
    if(!(e.key === 'Backspace' || ( e.which >= 65 && e.which <= 90 ) )) return;
    props.initList();
    switch(l) {
      case 1:
        if(e.key === 'Backspace') setL1({c:0,l:' '});
        else setL1({c:l1.c,l:e.key});
        break;
      case 2:
        if(e.key == 'Backspace' && l2.l === ' ') props.untab();
        if(e.key === 'Backspace') setL2({c:0,l:' '});
        else setL2({c:l2.c,l:e.key});
        break;
      case 3:
        if(e.key == 'Backspace' && l3.l === ' ') props.untab();
        if(e.key === 'Backspace') setL3({c:0,l:' '});
        else setL3({c:l3.c,l:e.key});
        break;
      case 4:
        if(e.key == 'Backspace' && l4.l === ' ') props.untab();
        if(e.key === 'Backspace') setL4({c:0,l:' '});
        else setL4({c:l4.c,l:e.key});
        break;
      case 5:
        if(e.key == 'Backspace' && l5.l === ' ') props.untab();
        if(e.key === 'Backspace') setL5({c:0,l:' '});
        else setL5({c:l5.c,l:e.key});
        break;
    }
    if(!(e.key == 'Backspace')) props.tab();
   };

   const updateColor = (l) => {
      props.initList();
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
      //for(let i = 0; i <=5; i++) setColor(i);
   };
   const setColor = (c) => {
      if(c.l === ' ' || c.c === 0) return '#afafaf';
      if(c.c === 1) return '#eed494';
      if(c.c === 2) return '#9ac8b7';
   };
   useEffect(() => {
      let guess = [l1,l2,l3,l4,l5];
      //update parent list
      props.updateList(guess,props.num);
   },[l1,l2,l3,l4,l5]);


   const vkeyClick = e => {
    let g = e.detail.act.charAt(3).charCodeAt(0)-48;
    let l = e.detail.act.charAt(2).charCodeAt(0)-48;

    let ev = {key: e.detail.key, which: (e.detail.key.charCodeAt(0)-32) };
    if(g === props.num) updateLetter(l,ev);
   }
   useEffect(() => {
    document.addEventListener("keyboard",vkeyClick);
    return () => document.removeEventListener("keyboard",vkeyClick);
   },[]);

   

   return (
      <div id='in'>
         <p className='input' id={'in1'+props.num} tabIndex='0' style={{background: setColor(l1)}} onKeyDown={ (e) => { updateLetter(1,e) } } onClick={()=> {updateColor(1)}}>{l1.l}</p>
         <p className='input' id={'in2'+props.num} tabIndex='0' style={{background: setColor(l2)}} onKeyDown={ (e) => { updateLetter(2,e) } } onClick={()=> {updateColor(2)}}>{l2.l}</p>
         <p className='input' id={'in3'+props.num} tabIndex='0' style={{background: setColor(l3)}} onKeyDown={ (e) => { updateLetter(3,e) } } onClick={()=> {updateColor(3)}}>{l3.l}</p>
         <p className='input' id={'in4'+props.num} tabIndex='0' style={{background: setColor(l4)}} onKeyDown={ (e) => { updateLetter(4,e) } } onClick={()=> {updateColor(4)}}>{l4.l}</p>
         <p className='input' id={'in5'+props.num} tabIndex='0' style={{background: setColor(l5)}} onKeyDown={ (e) => { updateLetter(5,e) } } onClick={()=> {updateColor(5)}}>{l5.l}</p>
      </div>
   )
}

export default Guess;