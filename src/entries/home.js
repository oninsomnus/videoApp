import React from 'react';
import { render } from 'react-dom';
//import Playlist from './src/playlists/components/playlist';
import data from '../api.json'
//import Categoria from './src/playlists/components/category'
import Home from '../pages/containers/home.js'

const homeContainer = document.querySelector("#home-container");
const holaMundo = <h1>hola mundssso</h1>;


//render(<Media image="./images/covers/bitcoin.jpg" title="¿Qué es responsive design?" author="Nombre del autor" type="video"/>, app)

//render(<Playlist data={data} />, app)

render(<Home data={data} />, homeContainer);