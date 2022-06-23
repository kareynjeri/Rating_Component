//get elements
const btns = document.querySelectorAll(".card-btn");
const submit = document.querySelector("#submit-button");
let thankyou_state = document.querySelector(".thankyou-state");
let maincontent = document.querySelector(".card");

//change color of button on click

for (let btn of btns) {
  btn.addEventListener("click", (event) => {
    console.log("now changing color", event);
    btn.setAttribute("style", "background-color: rgba(255, 119, 0, 0.98);");
  });
}


//counter for the buttons 


// //submit-button --> when clicked changes the current to a thankyou card

function showCard() {
  thankyou_state.style.display = "block";
  maincontent.style.display = "none";
 
}
submit.addEventListener('click', showCard);

