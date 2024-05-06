import React from "react"


const App = () => {

    const [nome,setNome] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [numero,setNumero] = React.useState('')
    const [senha,setSenha] = React.useState('')
    const [estado,setEstado] = React.useState('')
    const [cidade,setCidade] = React.useState('')
    const [bairro,setBairro] = React.useState('')
    const [cep,setCep] = React.useState('')
    const [rua,setRua] = React.useState('')

    consat [response, setResponse] = React.useState(null)


    function HandleSubmit(event){
        event.preventDefault()

        const form = {
            nome,
            email,
            telefone,
            senha,
            estado,
            cidade,
            bairro,
            cep,
            rua,


        }
        

    fetch('https://ranekapi.origamid.dev/json/api/usuario',{
    method:'POST',
    Headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(form)    
}) 


console.log(event)
    }

    return(
    
        <form  onSubmit={HandleSubmit}>
            <label htmlFor="nome">Nome </label>
            <input
            id="nome" 
            type="text" 
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            /> <p>{nome}</p> <br />

            <label htmlFor="email">Email </label>
            <input 
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            /> <p>{email}</p> <br />

            <label htmlFor="telefone">Telefone </label>
            <input
            id="telefone"
            type="tel"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
            />  <p>{numero}</p> <br />

            <label htmlFor="senha">Senha </label>
            <input
            id="senha" 
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            /> <p>{senha}</p> <br />

            <label htmlFor="estado">Estado </label>
            <input
            id="estado" 
            type="text"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
            /> <p>{estado}</p> <br />

            <label htmlFor="cidade">Cidade </label>
            <input 
            id="cidade"
            type="text"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
            /> <p>{cidade}</p> <br />

            <label htmlFor="bairro">Bairro </label>
            <input 
            id="bairro"
            type="text"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
            /> <p>{bairro}</p> <br />

            <label htmlFor="cep">CEP </label>
            <input 
            id="cep"
            type="number"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            /> <p>{cep}</p> <br />
            <label htmlFor="rua">Rua </label>
            <input
            id="rua" 
            type="text"
            value={rua}
            onChange={(event) => setRua(event.target.value)}
            /> <p>{rua}</p> <br />
            
            <button>Enviar</button> 
            {response && <p>Usuário Cadastrado!</p>} 
        </form>



    )

}

export default App;