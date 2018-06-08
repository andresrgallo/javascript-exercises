//Get input element
let filterInput = document.getElementById('filterInput');
//Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    let filterValue = 
    document.getElementById('filterInput').value.toUpperCase();


    //Get names in ul
    let ul = document.getElementById('namesList');
    //Get lis from ul or document
    let li = document.querySelectorAll('li.collection-item');

    //Loop through the collection of lis
    for (let i = 0;i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none'
        }
    }
}