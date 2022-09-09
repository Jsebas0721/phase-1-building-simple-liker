// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Variables to store HTML Elements
const hearts = document.querySelectorAll(".like-glyph");
const modal = document.getElementById('modal');
const errorMessage =  document.querySelector('#modal h2');

//When a user clicks on an empty heart:
for(let i = 0; i < hearts.length; i ++){
  hearts[i].addEventListener('click', handleClick);
}


function handleClick(e){
  //target the event(click)/ element value.
  let like = e.target;
  //Invoke mimicServerCall to simulate making a server request
  mimicServerCall()
  //When the "server" returns a success status:
  .then(function(event) { 
    if(like.innerText == EMPTY_HEART){
      //Change the heart to a full heart
      like.innerText = FULL_HEART;
      //Add the .activated-heart class to make the heart appear red
      like.classList.add("activated-heart");
      //When a user clicks on a full heart:
    }else if(like.innerText == FULL_HEART){
      //Change the heart back to an empty heart
      like.innerText = EMPTY_HEART;
      //Remove the .activated-heart class
      like.classList.remove("activated-heart");
    }
    alert('Successful');
  })
  //   When the "server" returns a failure status:
  // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
  .catch(function(error){
    // Display the error modal by removing the .hidden class
    modal.classList.remove("hidden");
    // Display the server error message in the modal
    errorMessage.textContent = error;
    // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
    setTimeout(function(){
      modal.classList.add("hidden");
    }, 2000)
    
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
