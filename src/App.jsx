import { useState } from "react";
import styled, {createGlobalStyle} from "styled-components" 

const GlobalStyle = createGlobalStyle

`
*{

margin: 0;
padding:0;
box-sizing: border-box


}

body{
background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
background-repeat: no-repeat;
background-size: 100% 100%;
background-position: center;
height: 100vh;

}


`
const Main = styled.main `

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 40px;

`

const Titulo = styled.h1 `

font-family: "Sevillana", cursive;
color: white;
font-weight: 400;
font-size: 62px;
`

const Button = styled.button `

font-family: "Sevillana", cursive;
color: white;
font-weight: 400;
font-size: 40px;
border-radius: 40px;
padding: 0.5em 3em;
background-color:  #007BFF;
border: none;




`
const Img = styled.img `

width: 772px;
height: 728px;

`






export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <Main>

      <GlobalStyle/>
      
      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>
      <Img
        src={
          lampada
            ? "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada-com-mago.png"
            : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"
        }
        alt="Lâmpada"
        
      />

      <Button onClick={trocarLampada} >Clique Aqui</Button>

    </Main>
  );
}
