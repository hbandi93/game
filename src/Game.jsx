import { useEffect } from "react";
import { useState } from "react";

const Game = () => {
    const defaultClickerPrice = 10;
    const [clickCount, setClickCount] = useState(0);
    const [clickIncrement, setClickIncrement] = useState(1);
    const [clickerPrice, setClickerPrice] = useState(defaultClickerPrice);
    const [levelCounter, setLevelCounter] = useState(1)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const userState = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(userState);
    }, [])

    const clickCounter = () => {
        setClickCount(clickCount + clickIncrement);
    }

    const clickDoubler = () => {
        setClickCount(clickCount - clickerPrice);
        setClickIncrement(clickIncrement * 2);
        setClickerPrice(clickerPrice * 2);
        setLevelCounter(levelCounter + 1);
    }
    if (!isLoggedIn) {
        return <div>Kellően taszító üzenet, ami szerint be kéne lépned először.</div>
    } else {
        return <div>
            <button type="submit" onClick={clickCounter}>Click</button>
            <p>Next upgrade at {clickerPrice}</p>
            <p>{clickCount}</p>
            <div>
                <p>Your clicker is lvl {levelCounter}</p>
                <button disabled={clickCount < clickerPrice} type="submit" onClick={clickDoubler}>Upgrade clicker</button>
            </div>
            {levelCounter >= 10 && <div>
                <p>Congrats, you have no life! You fucking nerd!</p>
            </div>}
        </div>
    }
}

export default Game;