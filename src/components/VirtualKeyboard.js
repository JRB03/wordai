import '../style/Keyboard.css';

const VirtualKeyboard = (props) => {

  const keyHit = (e,key) => {
    e.preventDefault();

    let kevent = new CustomEvent("keyboard",{ detail:{key:key,act:document.activeElement.id} });
    document.dispatchEvent(kevent);
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
      default:
        break;
    }
  }

  return (
    <div id="keyboard">
          <div className="row">
            <button style={{backgroundColor: setColor('q')}} 
              onMouseDown = {e => keyHit(e,'q')}>q</button>
            <button style={{backgroundColor: setColor('w')}} 
              onMouseDown = {e => keyHit(e,'w')}>w</button>
            <button style={{backgroundColor: setColor('e')}} 
              onMouseDown = {e => keyHit(e,'e')}>e</button>
            <button style={{backgroundColor: setColor('r')}} 
              onMouseDown = {e => keyHit(e,'r')}>r</button>
            <button style={{backgroundColor: setColor('t')}} 
              onMouseDown = {e => keyHit(e,'t')}>t</button>
            <button style={{backgroundColor: setColor('y')}} 
              onMouseDown = {e => keyHit(e,'y')}>y</button>
            <button style={{backgroundColor: setColor('u')}} 
              onMouseDown = {e => keyHit(e,'u')}>u</button>
            <button style={{backgroundColor: setColor('i')}} 
              onMouseDown = {e => keyHit(e,'i')}>i</button>
            <button style={{backgroundColor: setColor('o')}} 
              onMouseDown = {e => keyHit(e,'o')}>o</button>
            <button style={{backgroundColor: setColor('p')}} 
              onMouseDown = {e => keyHit(e,'p')}>p</button>
          </div>
          <div className="row">
            <div className="spacer half"></div>
            <button style={{backgroundColor: setColor('a')}} 
              onMouseDown = {e => keyHit(e,'a')}>a</button>
            <button style={{backgroundColor: setColor('s')}} 
              onMouseDown = {e => keyHit(e,'s')}>s</button>
            <button style={{backgroundColor: setColor('d')}} 
              onMouseDown = {e => keyHit(e,'d')}>d</button>
            <button style={{backgroundColor: setColor('f')}} 
              onMouseDown = {e => keyHit(e,'f')}>f</button>
            <button style={{backgroundColor: setColor('g')}} 
              onMouseDown = {e => keyHit(e,'g')}>g</button>
            <button style={{backgroundColor: setColor('h')}} 
              onMouseDown = {e => keyHit(e,'h')}>h</button>
            <button style={{backgroundColor: setColor('j')}} 
              onMouseDown = {e => keyHit(e,'j')}>j</button>
            <button style={{backgroundColor: setColor('k')}} 
              onMouseDown = {e => keyHit(e,'k')}>k</button>
            <button style={{backgroundColor: setColor('l')}} 
              onMouseDown = {e => keyHit(e,'l')}>l</button>
            <div className="spacer half"></div>
          </div>
          <div className="row">
            <button data-key="↵" className="one-and-a-half" 
              onMouseDown = {e => keyHit(e,' ')}> Color </button>
            <button style={{backgroundColor: setColor('z')}} 
              onMouseDown = {e => keyHit(e,'z')}>z</button>
            <button style={{backgroundColor: setColor('x')}} 
              onMouseDown = {e => keyHit(e,'x')}>x</button>
            <button style={{backgroundColor: setColor('c')}} 
              onMouseDown = {e => keyHit(e,'c')}>c</button>
            <button style={{backgroundColor: setColor('v')}} 
              onMouseDown = {e => keyHit(e,'v')}>v</button>
            <button style={{backgroundColor: setColor('b')}} 
              onMouseDown = {e => keyHit(e,'b')}>b</button>
            <button style={{backgroundColor: setColor('n')}} 
              onMouseDown = {e => keyHit(e,'n')}>n</button>
            <button style={{backgroundColor: setColor('m')}} 
              onMouseDown = {e => keyHit(e,'m')}>m</button>
            <button data-key="←" className="one" 
              onMouseDown = {e => keyHit(e,'Backspace')}>⌫</button>
          </div>
        </div>
  )
}
export default VirtualKeyboard;