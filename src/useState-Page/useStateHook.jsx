import { useState } from "react"
import './useStateHook.css';
import { useNavigate } from "react-router-dom";


const useStateHook = () => {
    const [ count, setCount ] = useState(0);

    const navigate = useNavigate();

    const incrementCount = () =>{
        setCount((prevState) => prevState + 1)
    };

    const handleNext = (e) =>{
        e.preventDefault();
        navigate('/useEffect')
  };
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>increment</button>
        <button onClick={handleNext}>Next Hook</button>
    </div>
  )
}

export default useStateHook;