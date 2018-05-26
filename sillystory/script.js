let name = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomVariable(arr){
    let item = arr[Math.floor(Math.random()*arr.length)];
    return item
}
//Declare variables
let storyText = 'Hi my name is Bob, and like :xitem and :yitem and I do not like :zitem, sometimes I do not like :xitem.  My ttl weight is 300 pounds.  Today is very hot, it is more or less 90 farenheit degrees';
//variable arrays to use to change in main story
let xItem = ['apples', 'oranges', 'avocados'];
let yItem = ['pears', 'peas', 'potatoes'];
let zItem = ['carrots', 'ice cream', 'chocolate'];

randomize.addEventListener('click',result);

function result(){
    //Define random function for selection of elements from arrays x,y,z
    // replace name in original story with input
    newStory = storyText
    newStory = newStory.replace(':xitem', randomVariable(xItem));
    newStory = newStory.replace(':xitem', randomVariable(xItem));
    newStory = newStory.replace(':yitem', randomVariable(yItem));
    newStory = newStory.replace(':zitem', randomVariable(zItem));
    if (name.value !== ''){
        let newName = name.value
        newStory = newStory.replace('Bob', newName);
    } else {
        alert('enter a name please!!')
    };
    //replace x,y,z items in newStory with random values from array

    //replace pounds with stones and farenheit with celsius if Uk is selected
    if(document.getElementById("uk").checked) {
        weight = Math.floor(300 * 0.0124) + " stone";
        temperature = Math.floor((90-32)*(5/9)) + " celcius";
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('90 farenheit', temperature);
    }
story.textContent = newStory;
story.style.visibility = 'visible';


}