const textarea = document.querySelector('textarea[name=area]');
const btn = document.querySelector('.button');
const output = document.querySelector('.output');
//queryselectors

const serverUrl = "https://api.funtranslations.com/translate/groot.json";


function urlHandler(add) {
    return `${serverUrl}?text=${add}`;
}


function errorHandler(error) {
    console.log(error);
    alert("error");
}


function clickHandler() {

    const inputText = textarea.value;

    fetch(urlHandler(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)


}




btn.addEventListener("click", clickHandler);