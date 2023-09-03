var btn=document.querySelector("#translate-btn");
var input=document.querySelector("#input-btn");
var output=document.querySelector("#output-btn");

var serverURL="https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(text){
    return serverURL+"?"+"text= "+ text;
}
function errorHandler(error){
    console.log("error ocured",error);
    alert("something went wrong");
}
function clickHandler(){
    var inputText=input.value;

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=> {
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
    })
    .catch(errorHandler)
}
btn.addEventListener('click',clickHandler);