import React from 'react';
import styled from "@emotion/styled";
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/Navbar/NavBar';
import Map from './components/Map/Map.jsx';


const Contenedor = styled.div`
  margin: 0 auto;
  padding: 0;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 2731px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
`

function App (){
  return(
    <div className="App">
      <Contenedor>
        <Header titulo="INAI Candidatos y Partidos Políticos 2021" />
        <NavBar></NavBar>
        <Footer derechos="Digital Fr43nds 2021 Todos los Derechos Reservados"/>
        <Map></Map>
      </Contenedor>
    </div>

  );
}

export default App;
