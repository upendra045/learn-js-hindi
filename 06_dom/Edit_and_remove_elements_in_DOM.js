const div = document.createElement('div');
console.log(div);

div.className = "main"
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerText = "Chai aur code"
const addText = document.createTextNode("Chai aur code")
div.appendChild(addText);
document.body.appendChild(div)


function addLanguage(langName) {
  const li = document.createElement('li');
  li.innerHTML = `${langName}`
  document.querySelector('.language').
    appendChild(li)
}

addLanguage("python");
addLanguage("typescript");

function addOptiLanguage(langName) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(langName));
  document.querySelector('.language').appendChild(li)

}
addOptiLanguage('golang');


//edit
const secondLang = document.querySelector("li:nth-child(2)")
const newLi = document.createElement('li');
newLi.textContent = "lauda";
secondLang.replaceWith(newLi)

//edit with typescript
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>Typescript</li>'


//remove
const lastLang = document.querySelector('li:nth-child(3)')
lastLang.remove()