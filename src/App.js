import React, { useState, useEffect, useRef } from 'react';
import "./App.css";

const App = (props) => {
  const [time, setTime] = useState(0);
  const [wordNum, setwordNum] = useState(0);
  const [score, setScore] = useState(0);
  const [finalScore, setfinalScore] = useState(0);
  const [inputDisables, setinputDisables] = useState(true);
  const [button, setbutton] = useState("start");
  const [buttonDisables, setbuttonDisables] = useState(false);

  const [wordInputDisables, setWordInputDisables] = useState(false);
  const [wordButtonDisables, setWordButtonDisables] = useState(false);

  const [word] = useState(["objective", "browser", "towel", "operator", "democracy", "effect", "route", "experience", "respect", "foundation",
                "machine", "feather", "javascript", "reacthook", "bonus"]);  

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    if(buttonDisables === true){
      setTime(time - 1);
      if(time === 1) {
        setinputDisables(true);
        setbuttonDisables(false);
        setbutton("restart");
        setfinalScore(score);
        setScore(0);
        setWordInputDisables(false);
        setWordButtonDisables(false);
      }
    }
  }, 1000);

  const handleChange = (e) => {
    if(e.target.value === word[wordNum]){
      setScore(score + 1);
      setwordNum(Math.floor(Math.random() * word.length));
      setTime(time + 3);
      e.target.value = "";
    }
  }

  const handleClick = () => {
    setWordButtonDisables(true);
    setWordInputDisables(true);
    setbuttonDisables(true);
    setbutton("starting ...");
    setinputDisables(false);
    setTime(10);
    setwordNum( Math.floor(Math.random() * word.length) );
    document.getElementsByClassName("game__input")[0].value = "";
  }

  const handleWordClick = () => {
    if(document.getElementsByClassName("word__input")[0].value.length >= 3){
      word.push(document.getElementsByClassName("word__input")[0].value);
      document.getElementsByClassName("word__input")[0].value = "";
    }
  }

  return <div className="container">
    <div className="addWord">
      <input className="word__input" disabled={wordInputDisables}/>
      <button className="word__button" disabled={wordButtonDisables} onClick={() => handleWordClick()}>Add Words</button>
    </div>
    <div className="game">
      <p className="game__timertitle">Your Time</p>
      <h1 className="game__timer">{time}</h1>
      <h3 className="game__word no-drag">{word[wordNum]}</h3>
      <input className="game__input" disabled={inputDisables} onChange={(e) => handleChange(e)}/>
      <p className="game__score">Current Score : <span>{score}</span></p>
      <p className="game__final_score">Final Score : <span>{finalScore}</span></p>
      <button className="game__button" disabled={buttonDisables} onClick={() => handleClick()}>{button}</button>
    </div>
  </div>
}

export default App;
