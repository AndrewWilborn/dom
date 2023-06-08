const bodyElement = document.body;

bodyElement.append("hello world");

const divElement = document.createElement("div");
divElement.innerHTML = "<p>hello paragraph</p>"; //innerHTML can create security risks
bodyElement.appendChild(divElement);


const newDivElement = document.createElement("div");
bodyElement.append(newDivElement);
const strongElement = document.createElement("strong");
newDivElement.append(strongElement);
strongElement.innerText = "hello strong";

divElement.remove()