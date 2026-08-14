const h1=document.querySelector('h1');
const input11=document.querySelector('#calculo1');
const input12=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
function btnOnClick(){
    const sumaInputs=Number(input11.value)+Number(input12.value);
    pResult.innerText="Resultado: "+sumaInputs;}


    

