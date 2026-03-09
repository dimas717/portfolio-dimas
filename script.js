const text = ["Web Developer", "UI Designer", "Programmer"];
let index = 0;
let charIndex = 0;

function type() {

if(charIndex < text[index].length){
document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
charIndex++;
setTimeout(type,100);
}

else{
setTimeout(erase,2000);
}

}

function erase(){

if(charIndex > 0){
document.getElementById("typing").innerHTML = text[index].substring(0,charIndex-1);
charIndex--;
setTimeout(erase,50);
}

else{
index++;
if(index >= text.length){
index = 0;
}
setTimeout(type,200);
}

}

document.addEventListener("DOMContentLoaded", function(){
type();
});

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});