import '../style/Keyboard.css';
import {useState} from 'react';

const Keyboard = (props) => {

  const keyHit = (e,key,inEl) => {
    e.preventDefault();
    inEl.focus();
  }

  const setColor = (l) => {
    let color = -1;
    props.guesses.forEach(n => {
      if(n.l === l && n.c > color) color = n.c;
    });
    switch(color) {
      case 0:
        return "#afafaf";
      case 1:
        return "#eed494"
      case 2:
        return "#9ac8b7";
    }
  }

  return (
    <div id="keyboard">
          <div className="row">
            <button style={{backgroundColor: setColor('q')}} disabled>q</button>
            <button style={{backgroundColor: setColor('w')}} disabled>w</button>
            <button style={{backgroundColor: setColor('e')}} disabled>e</button>
            <button style={{backgroundColor: setColor('r')}} disabled>r</button>
            <button style={{backgroundColor: setColor('t')}} disabled>t</button>
            <button style={{backgroundColor: setColor('y')}} disabled>y</button>
            <button style={{backgroundColor: setColor('u')}} disabled>u</button>
            <button style={{backgroundColor: setColor('i')}} disabled>i</button>
            <button style={{backgroundColor: setColor('o')}} disabled>o</button>
            <button style={{backgroundColor: setColor('p')}} disabled>p</button>
          </div>
          <div className="row">
            <div className="spacer half"></div>
            <button style={{backgroundColor: setColor('a')}} disabled>a</button>
            <button style={{backgroundColor: setColor('s')}} disabled>s</button>
            <button style={{backgroundColor: setColor('d')}} disabled>d</button>
            <button style={{backgroundColor: setColor('f')}} disabled>f</button>
            <button style={{backgroundColor: setColor('g')}} disabled>g</button>
            <button style={{backgroundColor: setColor('h')}} disabled>h</button>
            <button style={{backgroundColor: setColor('j')}} disabled>j</button>
            <button style={{backgroundColor: setColor('k')}} disabled>k</button>
            <button style={{backgroundColor: setColor('l')}} disabled>l</button>
            <div className="spacer half"></div>
          </div>
          <div className="row">
            <button data-key="↵" className="one-and-a-half" disabled>enter</button>
            <button style={{backgroundColor: setColor('z')}} disabled>z</button>
            <button style={{backgroundColor: setColor('x')}} disabled>x</button>
            <button style={{backgroundColor: setColor('c')}} disabled>c</button>
            <button style={{backgroundColor: setColor('v')}} disabled>v</button>
            <button style={{backgroundColor: setColor('b')}} disabled>b</button>
            <button style={{backgroundColor: setColor('n')}} disabled>n</button>
            <button style={{backgroundColor: setColor('m')}} disabled>m</button>
            <button data-key="←" className="one" disabled>⌫</button>
          </div>
        </div>
  )
}

export default Keyboard;