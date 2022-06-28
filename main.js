//get elements
let ratingButtons = document.getElementsByName("rating_buttons")
let inputs = document.getElementsByClassName("btns")
let maincontent = document.querySelector(".card");
let thankyou_state = document.querySelector(".thankyou-state");
let submit = document.querySelector("#submit-button");



let number = null;
//change background color of each buuton using a loop and adding a class 
const rating = document.getElementById("rating");
const selectRating = () => {
  console.log("check")
  for ( let i = 0; i < ratingButtons.length; i++ ) {
    inputs[i].classList.remove("active")
  }
  if (ratingButtons[i].checked ){
    number = ratingButtons[i].value;
    inputs[i].classList.add("active");
  }
  return number ;

};


function showCard() {
  thankyou_state.style.display = "block";
  maincontent.style.display = "none";
  rating.innerHTML = number;
}
submit.addEventListener('click', showCard);
































// change color of button on click

// for (let btn of btns) {
//   btn.addEventListener("click", (event) => {
//     console.log("now changing color", event);
//     btn.setAttribute("style", "background-color: rgba(255, 119, 0, 0.98);");
//   });
// }
// btns.addEventListener('click' , counter)

// function counter() {
//   for(let i = 0 ; i < btns.length ; i++){
//     console.log(btns[i])
//   }
// }


//counter for the buttons 


// //submit-button --> when clicked changes the current to a thankyou card



