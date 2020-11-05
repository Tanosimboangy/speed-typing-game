import React, {useState, useEffect} from "react";
function App() {
    const STARTING_TIME = 10;
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
    // Create a boolean to set the setTimeRunning to false so that the setTimeRunning will not kick unless the start button is clicked
    const [isTimeRunning, setTimeRunning] = useState(false);
    const [wordsNumber, setWordsNumber] = useState(0);

    function handleChange(e) {
        const {value} = e.target;
        setText(value);
    }

    function startGame() {
        setTimeRunning(true)
        setWordsNumber(0);
        setText("");
    }
    
    function endGame() {
        setTimeRunning(false);
        setTimeRemaining(STARTING_TIME);
        setWordsNumber(words(text));
    }

    useEffect(() => {
        if (timeRemaining && isTimeRunning > 0) {
            const timeOut = setTimeout(() =>  {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame();
        }
        // Adding those two states to begin runnig this useEffect
    }, [timeRemaining, isTimeRunning])

    // Counting words
    // function WordCount(str) { 
    //     return str.split(" ").length;
    // }
    // console.log(WordCount("hello world"));

    function words(text) {
        const texts = text.trim().split(" ");
        const countWords =  texts.filter(word => word !== "").length;
        return countWords;
    }

    return (
        <>
            <h1>Typing Game</h1>
            {/* You can use this way for dealing with textarea */}
            {/* <textarea value={text} onChange={(e) => setText(e.target.value)} /> */}
            <textarea disabled={!isTimeRunning} value={text} onChange={handleChange} />
            <h4>Time remaining: {timeRemaining}</h4>
            <button disabled={isTimeRunning} onClick={startGame}>Start</button>
            <h1>Word count: {wordsNumber}</h1>
        </>
    )
}
export default App;
//  https://scrimba.com/p/p7P5Hd/cW8Jdfy

