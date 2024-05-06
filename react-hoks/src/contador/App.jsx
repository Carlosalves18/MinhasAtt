import React from "react"
const App = () =>{
 
  //const ativo = true
  //const inativo = false
  const [ativo, setativo] = React.useState(true)
  const [contador, setContador] = React.useState(1)
  const [item, setItem] = React.useState(['1']) //null = valor vazio
  
  function HandleClick(){
    setContador((contador)=>{
        return contador + 1
      })
      setItem((item) =>{
        return[+ contador]
      })
  }

  return(
    <>
    <button onClick={HandleClick}>
      {contador}
    </button>
    {item.map((item) => (
        <li key={item}>{item}</li>
    ))}
    </>
  )
}

export default App

