import React from "react";
import speedGames from "./speedGames";

function App() {
    const [text, textArea, timeRemaining, handleChange, startGame, isTimeRunning, wordsNumber] = speedGames()
    return (
        <>
            <h1>Typing Game</h1>
            <textarea ref={textArea} disabled={!isTimeRunning} value={text} onChange={handleChange} />
            <h4>Time remaining: {timeRemaining}</h4>
            <button disabled={isTimeRunning} onClick={startGame}>Start</button>
            <h1>Word count: {wordsNumber}</h1>
        </>
    )
}
export default App;
