import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container } from "react-bootstrap";
import mapa from '../../images/mapa.png';

const Map = () => {
    return (
		<Container>
			<Image style={{ backgroundImage: `url(${mapa})`, backgroundSize: 'cover' }}/>
		</Container>
    )
}

export default Map;
