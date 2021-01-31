var icoon = document.getElementById("klikicoon");
var zoekbalk = document.getElementById("zoekbalk");

icoon.onclick = function(){
	if(zoekbalk.getAttribute("class") == "menuzien"){
		zoekbalk.setAttribute("class", "");
	}
	else{
		zoekbalk.setAttribute("class", "menuzien");
	}
}
var myIndex = 0;
slider();

function slider(){
  var slide = document.getElementsByClassName("slide");
  for(i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  myIndex++;
  if(myIndex > slide.length) {myIndex = 1}
  slide[myIndex-1].style.display = "block";  
  setTimeout(slider, 3000);
}