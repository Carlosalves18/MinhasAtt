import React from "react";

const  TextArea = () =>{

    const [mensagem, setMensagem] = React.useState

    return(
        <form>
            <textarea 
            value={mensagem}
            id="mensagem" 
            rows="5"
            onChange={({target})=>setMensagem(target.value)}
            />
            <p>{mensagem}</p>
        </form>  
    )
}
export default TextArea;