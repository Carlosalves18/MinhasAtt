import React from "react"

const Lista = () =>{

    const [items, setItems] = React.useState(["Item 0"])

    function HandleClick(){
        setItems([...items,"Item" + items.length])
    }
    function RemoveItem(){
        const novaL = [items]
        console.log(novaL)
        novaL.pop()
        setItems(novaL)

    }

    return(
        <>
        {items.map((item,index) =>(
            <li key={index}>{item}</li>
        ))}
        <button onClick={HandleClick}>Adicionar Item</button>
        </>
    )
}
export default Lista;

