import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const useRefHook = () => {
  const [name, setName] = useState("");

    // const inputRef = useRef();

    // const focusInput = () => {
    //     inputRef.current.focus();
    // };

    const previousName = useRef();

    useEffect(() => {
        previousName.current = name;
    }, [name]);

    return (
    <div>
        {/* ref={inputRef} */}
        <input  value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello! My name is {name}</p>
        {/* <button onClick={focusInput}>Focus Input</button> */}
        <p>And my name was {previousName.current}</p>
    </div>
  )
}

export default useRefHook