import React from "react"
const AttY = () =>{

    const [contar,setContar] = React.useState(0)

   

    return(
        <>
        <button onClick={() => setContar(contar - 1)}>-</button>
        <span>{contar}</span>
        <button onClick={() => setContar(contar + 1)}>+</button>
        </>
    )

}
export default AttY; 