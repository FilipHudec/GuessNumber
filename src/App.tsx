import { useRef, useState } from "react";
import AppCSS from "./App.module.css";



const App = () => {
  const userInputRef = useRef(null);
  const [userInput, setUserInput] = useState<string>();
  const [guess, setGuess] = useState<number>(0);

  let max = useRef(0);
  let min = useRef(0);  


  const Larger = () => {
    min.current = guess;
    setGuess(Math.floor(max.current + min.current / 2));
  }

  const Smaller = () => {
    max.current = guess;
    setGuess(Math.floor(max.current - min.current / 2));
  }

  const Guess = () =>{
    setGuess(Math.floor(Math.random() * parseInt(userInput!)*2));
  }

  const Reset = () => {
      max.current = 0;
      min.current = 0;
  }


  return (
    <>
    <div className={AppCSS.container}>
      <h1 className={AppCSS.container__heading}>I will guess your number</h1>
    <div className={AppCSS.otherContainer}>
      <p>Think of a number between 0 and</p>
      <input className={AppCSS.container__input} ref={userInputRef} type="string" onChange={e => setUserInput(e.target.value)} />
      <p>Secret Number</p>
      <input type="number"/>
    </div>
      <p>Is your number <b>{guess} ?</b></p>
      <button className={AppCSS.container__button} onClick={e => Guess()}>Start Guessing</button>
    <div>
      <button onClick={Larger}>Higher?</button>
      <button onClick={Smaller}>Lower?</button>
      <button onClick={Reset}>Reset</button>
    </div>
    </div>
    </>
  );
};
export default App;