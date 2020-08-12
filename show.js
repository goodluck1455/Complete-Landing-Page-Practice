function openBtn(){
    let slideBtn = document.querySelector(".side-menu");
    slideBtn.style.display="block";
    document.querySelector(".B-show").style.display="none";
    document.querySelector(".C-show").style.display="none";
    
}
function openBtn2(){
    let slideBtn = document.querySelector(".side-menu");
    slideBtn.style.display="none";
    document.querySelector(".B-show").style.display="block";
    document.querySelector(".C-show").style.display="none";
    
}
function openBtn3(){
    let slideBtn = document.querySelector(".side-menu");
    slideBtn.style.display="none";
    document.querySelector(".B-show").style.display="none";
    document.querySelector(".C-show").style.display="block";
    
}

var header = document.getElementById("A-preview");
var btns = header.getElementsByClassName("Mybtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}