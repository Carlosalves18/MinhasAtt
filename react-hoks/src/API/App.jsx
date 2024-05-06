import React from "react"
import Produto from "./Produto"

const App = ()=>{

    const [dados, setDados] =  React.useState(null)
    const [carregando,setCarregando] = React.useState(null)

    async function getData(event){
        setCarregando(true)
        const response = await fetch (`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)

        const json = await response.json()

        setDados(json)
        setCarregando(flase)
        
    
    }
    console.log()
    return(
        <>
        <button onClick={getData}>Tablet</button>
        <button onClick={getData}>Smartphone</button>
        <button onClick={getData}>Notebook</button>
        {carregando && <p className="i">Coarregando...</p>}
        {dados && <Produto dados={dados}/>}
        
        </>
    )

}

export default App;