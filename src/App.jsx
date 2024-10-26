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
background-size: cover;
background-position: center;
height: 100vh;

@media (min-width: 320px) and (max-width: 399px) {
    

}


`
const Main = styled.main `

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 2rem;

`

const Titulo = styled.h1 `

font-family: "Sevillana", cursive;
color: white;
font-weight: 400;
font-size: 62px;

@media (min-width: 300px) and (max-width: 360px) {
font-size: 16px;
text-align:center;

}

@media (min-width: 361px) and (max-width: 500px) {
font-size: 25px;
text-align:center;

}

@media (min-width: 500px) and (max-width: 1000px) {
font-size: 45px;
text-align:center;

}

@media (min-width: 1000px)  {

text-align:center;


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

@media (min-width: 300px) and (max-width: 600px){
font-size: 20px;
font-weight: 300;
border-radius: 40px;
padding: 20px 60px;
background-color:  #B74794;


}





`
const Img = styled.img `



@media (min-width: 300px) and (max-width: 399px){


width: 600px;


}

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
