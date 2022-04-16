import react,{useState} from 'react';

const Module = (props) => {
   const [bool,setBool] = useState(true);


   window.addEventListener('keydown', e => {
      console.log(bool);
      setBool(!bool);
   })
   const out = () => {
      if(bool) return 'yay';
   }

   return (
      <div>
         <p>yeeeet</p>
         <p>{out()}</p>
      </div>
   )
}

export default Module;