var loginButton = document.getElementById('loginButton'); //link this to a button or link on the site
var displayStuff = document.getElementById("displaystuff"); //this is the HTML object that display the data. You can choose whatever
var ourRequest = new XMLHttpRequest();
var data;

loginButton.addEventListener('click', function(){

  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
  ourRequest.onload= function(){
    data = JSON.parse(ourRequest.responseText);
    renderHTML(data); //funtion defined below
    window.alert(data); //for debugging purposes
    //console.log(data[0]);

  };

  ourRequest.send();

  //loginButton.classList.add("hide-me"); //This is optional.. This calls a css class to hide the button
});

//This send the json data to a HTML variable for display
function renderHTML(data){

  displayStuff.insertAdjacentHTML('beforeend', data[0].name); //the works for div in HTML 
}