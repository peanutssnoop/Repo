const h1=document.querySelector('h1');
const bienvenida=document.getElementsByClassName('bienvenida');
const titulo=document.getElementById('titulo');
const btn=document.querySelector('saludar');
const descansar=document.querySelector('#descansar');

const fotogato=document.querySelector('#fotogato');

/*Foto agragada a html desde js con manipulacion del Dom*/
const imagjs=document.createElement('img');
imagjs.setAttribute('src', './fotos/image2.png');
titulo.append(imagjs);

/*Funcion de evento*/
function btnclick(){
descansar.innerHTML='Subiendo proyectos en los siguientes días <3';
    }

   
    const frase=document.querySelector('#frase');

    /*Evento con createElement*/
    function frasemiau(event){
       const foto=document.createElement('img');
       foto.setAttribute('src', 'https://previews.123rf.com/images/leonart/leonart1704/leonart170400016/76466174-estoy-confundido-%C2%A1lo-siento-car%C3%A1cter-del-gato-burbuja-de-di%C3%A1logo-charla-de-gato-.jpg');
       foto.setAttribute('width', '150px');
       foto.setAttribute('height', '200px');
       fotogato.append(foto);
   }
   
   frase.addEventListener('click', frasemiau);
   