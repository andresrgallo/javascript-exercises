var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i < 6; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e){
    let srcValue = e.target.getAttribute('src')
    displayedImage.setAttribute('src', srcValue)
  }
}

btn.onclick = function(){
  if (btn.textContent === "Darken"){
  overlay.setAttribute('class', 'overlay darken');
  btn.textContent = "Lighten";} else{
  overlay.setAttribute('class', 'overlay lighten');
  btn.textContent = "Darken"
  }
}