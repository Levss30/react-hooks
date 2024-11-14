import React from 'react'
import { useState, useEffect } from 'react'

const useEffectHook = () => {
    const [resourceType, setResourceType] = useState("posts");
  

    /*USAR ASYNC NO useEFFECT */
    // useEffect(() => {
    //     const fetchResourceTypes = async () =>{
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
    //         const responseJSON = await response.json();

    //         console.log(responseJSON)
    //     }
    //    fetchResourceTypes();
    // }, [resourceTypes])
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [resourceType])
    
    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    }
  
    return (
    <div>
        <h1>{resourceType}</h1>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={() => changeResourceType("posts")}>Posts</button>
            <button onClick={() => changeResourceType("comments")}>Comments</button>
            <button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
    </div>
  )
}

export default useEffectHook