import '../CSS/componentes.css';
//import webpackprocess from '../assets/img/webpack-process.png';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1')

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1);

    //creando img
    //const img = document.createElement('img');
    //img.src = webpackprocess;
    //document.body.append(img);
}