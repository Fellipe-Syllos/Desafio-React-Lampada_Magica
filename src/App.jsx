import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components";
const Globalstyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  boxsing: borderbox;
}
body{
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  display: flex;
  flex-direction: column;
  align-items: center;

   @media (max-width: 900px) {
    background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/imagem%20do%20palacio.png?raw=true");
    background-size: cover;
    background-repeat: no-repeat;
    
    height: 110vh;
    width: 100vw;
}
`;
const Titulo = styled.h1`
  text-align: center;
  color: white;
  font-size: 400;
  font-weight: bold;
  font-family: "Sevillana", cursive;
   @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;
const Botao = styled.button`
font-size: 1.5rem;
color: white;
background-color: #007BFF;
width: 15vw;
height: 5vh;
border-radius: 50px;
border: none;
font-family: "Sevillana", cursive;
 
@media (max-width: 900px) {
    background: #b74794;
    width: 150px;
    
  }
`;

const Conteudo = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 900px) {
display: flex;
aling-items: center;
justify-content: center;
margin-top: 30vh;
width: 50vw;
margin-left: 30vw;
}
`;
const Imagem = styled.img`
  @media (max-width: 900px) {
    width: 450px;
    height: 500px;
    flex: 1;
    object-fit: contain;
  }
`;



export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };
  return (
    <main>
      <Globalstyle />

      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>
      <Conteudo>
        <Imagem
          src={
            lampada
              ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
              : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
          }
          alt="Lâmpada mágica" />
        <Botao onClick={trocarLampada}>Clique Aqui </Botao>
      </Conteudo>
    </main>
  );
}
