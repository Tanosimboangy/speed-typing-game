import {useState, useEffect, useRef} from "react";

function speedGame() {
    const STARTING_TIME = 10;
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
    const [isTimeRunning, setTimeRunning] = useState(false);
    const [wordsNumber, setWordsNumber] = useState(0);
    const textArea = useRef(null)

    function handleChange(e) {
        const {value} = e.target;
        setText(value);
    }

    function startGame() {
        setTimeRunning(true)
        setWordsNumber(0);
        setText("");
        textArea.current.disabled = false;
        textArea.current.focus();
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
    }, [timeRemaining, isTimeRunning])


    function words(text) {
        const texts = text.trim().split(" ");
        const countWords =  texts.filter(word => word !== "").length;
        return countWords;
    }

    return ([text, textArea, timeRemaining, handleChange, startGame, isTimeRunning, wordsNumber])
}
export default speedGame;

