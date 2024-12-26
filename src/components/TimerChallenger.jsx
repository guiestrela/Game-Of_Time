import { useState, useRef } from "react";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef()

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpire, setTimerExpire] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpire(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpire && <p>You lost</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
}