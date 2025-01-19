
const inputword = document.querySelector("#inpurword");
const btn = document.querySelector("#btn");
const word = document.querySelector("#word");
const partOf = document.querySelector("#verb");
const meaning = document.querySelector("#Meaning");
const example = document.querySelector("#Example");
const antonym = document.querySelector("#Antonyms");
const a = document.querySelector("#a");
let URL;
let str;
function setvalues(data , value){
    word.innerText = "Word : "+ value;
    
    
    str = data[0].meanings[0].partOfSpeech;
    if(str === undefined)str = "not define";
    partOf.innerText =(data[0].meanings[0].partOfSpeech);
    
    
    str = data[0].meanings[0].definitions[0].definition;
    if(str === undefined)str = "not define";
    meaning.innerText = "Meaning : " +str;
    
    
    str = data[0].meanings[0].definitions[0].example;
    if(str === undefined)str = "not define";
    example.innerText = "Example : " + str;
    
    
    str = data[0].meanings[0].antonyms[0];
    if(str === undefined)str = "not define";
    antonym.innerText = "Antonyms : " + str ;
    a.innerHTML = `<a href="${data[0].sourceUrls[0]}"><button id="read_More">Read More</button></a>`;


    
    
}

btn.addEventListener("click" , async ()=>{
    let value = inputword.value;
    console.log(value);
    URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    setvalues(data , value);

});

