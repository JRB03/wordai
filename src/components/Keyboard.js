import '../style/Keyboard.css';
import {useState} from 'react';

const Keyboard = (props) => {
   return (
      <div id="keyboard">
            <div className="row">
              <button data-key="q" onClick={() => console.log("hello")} disabled>q</button><button data-key="w">w</button><button data-key="e">e</button><button data-key="r">r</button><button data-key="t">t</button><button data-key="y">y</button><button data-key="u">u</button><button data-key="i">i</button><button data-key="o">o</button><button data-key="p">p</button>
            </div>
            <div className="row">
              <div className="spacer half"></div><button data-key="a">a</button><button data-key="s">s</button><button data-key="d">d</button><button data-key="f">f</button><button data-key="g">g</button><button data-key="h">h</button><button data-key="j">j</button><button data-key="k">k</button><button data-key="l">l</button><div className="spacer half"></div>
            </div>
            <div className="row">
              <button data-key="↵" className="one-and-a-half">enter</button><button data-key="z">z</button><button data-key="x">x</button><button data-key="c">c</button><button data-key="v">v</button><button data-key="b">b</button><button data-key="n">n</button><button data-key="m">m</button><button data-key="←" className="one">⌫</button>
            </div>
          </div>
   )
}

export default Keyboard;