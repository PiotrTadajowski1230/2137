var t = "Witam";
console.log(t);
var div = document.querySelector('.js');
console.log(div);
div.innerHTML = "div";
var button = document.querySelector(".button");
console.log(button);
button.onclick = function(){
  div.innerHTML = "kliknięty"
}