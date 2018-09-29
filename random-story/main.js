var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
var insertY = ["the soup kitchen", "Disneyland", "the White House"]
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    var name = customName.value;
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/24) + " stones";
    var temperature =  Math.round(94/9) + " celsius";
  } else {
  weight = "300 pounds";
  temperature = "94 fahrenheit";
  }
  var storyText = "It was " + temperature + " outside, so " + randomValueFromArray(insertX) + " went for a walk. When they got to " + randomValueFromArray(insertY) + ", they stared in horror for a few moments, then " + randomValueFromArray(insertZ) + ". " + name + " saw the whole thing, but was not surprised —" + randomValueFromArray(insertX) + " weights " + weight + " , and it was a hot day."
  story.textContent = storyText;
  story.style.visibility = 'visible';
}
