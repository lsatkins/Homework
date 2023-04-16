const insertNode = (tag, array, text) => {

    let element = document.createElement(tag)

    for(let i = 0; i <= array.length - 2; i+=2){

            element.setAttribute(array[i], array[i+1])
    }

    if(text != ""){
        element.innerText = text;
    }

    return element;


}

let body = document.querySelector('body');

let containerArr = ["class", "container-fluid"];

let container = insertNode("div", containerArr,"");


console.log(body);

let nav = document.createElement('nav');
nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark");
container.append(nav);

let a1 = document.createElement('a');
a1.setAttribute("class", "navbar-brand");
a1.setAttribute("href", "#");
a1.innerText = "HighOnCoding";
nav.append(a1);

let button1 = document.createElement('button');
button1.setAttribute("class","navbar-toggler");
button1.setAttribute("type","button");
button1.setAttribute("data-toggle","collapse");
button1.setAttribute("data-target","navbarSupportedContent");
button1.setAttribute("aria-controls","navbarSupportedContent");
button1.setAttribute("aria-label","Toggle navigation");
button1.setAttribute("aria-expanded","false");
nav.append(button1);

body.append(container);


