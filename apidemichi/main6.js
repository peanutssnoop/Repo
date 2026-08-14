const URL = 'https://rickandmortyapi.com/api/character/2';


async function myCat () {
    fetch(URL)
.then(res => res.json())
.then(data =>{
   console.log(data[0]);
    const img = document.querySelector('img');
    img.src = data.image;
    
});
   /* const res = await fetch(URL);
    const data = await res.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
    */
}

const myButton = document.querySelector("button");
myButton.onclick = myCat; 


 

//https://api.thecatapi.com/v1/images/search
 


