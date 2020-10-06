import { animals } from './animals';
 const title = ""
const background =(
    <img 
        className="background"
        alt="Ocean"
        src="oceans.jpg"    />
);

 const animalFacts = (
     <div>
        <h1>{title === "" ? 'Click an animal for fun fact' : title}</h1>
        {background}
    </div>
 );
ReactDOM.render(animalFacts, document.querySelector('#root'))
