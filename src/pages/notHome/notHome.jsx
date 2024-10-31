import 'react';
import './notHome.css';
import {useState, useEffect} from 'react';

const NotHome = () => {
    const[counter, setCounter] = useState(0);
    const[message, setMessage] = useState("")

    useEffect(() => {
        if (counter > 5) { 
            setMessage("You passed 5!")
        } else { 
            setMessage("")
        }
    }, [counter])
    return ( 
        <>
        <div className="notHome-container">
            <h1> Not Home </h1>
            <div className='counter'> Counter: {counter} </div>
            <div className="counter popup"> {message} </div>
            <div>
                <button onClick={() => setCounter(counter + 1)}> increment </button>
                <button onClick={() => counter > 0 && setCounter(counter - 1)}> decrement </button>
            </div>
        </div>
        </>
    )
};

export default NotHome;