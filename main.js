//get elements
const btns = document.querySelectorAll(".card-btn");
const submit = document.querySelectorAll("#submit-button");
let thankyou_state = document.getElementsByClassName("thankyou-state");
let maincontent = document.querySelector(".card");

//change color of button on click

for (let btn of btns) {
  btn.addEventListener("click", (event) => {
    console.log("now changing color", event);
    btn.setAttribute("style", "background-color: rgba(255, 119, 0, 0.98);");
  });
}

// //submit-button --> when clicked changes the current to a thankyou card
submit.addEventListener("click", showCard);
function showCard() {
  console.log("hiding main card and showing thank you state card");
  maincontent.style.display = "flex";
  thankyou_state.style.display = "none";
  console.log("show thank you card");
}

