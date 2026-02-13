let details = document.querySelector(".details"); // single form

details.addEventListener("submit", (e) => {
  e.preventDefault();

  // inputs har submit pe select karo
  let inputs = details.querySelectorAll("input");

  // naya card
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.src = inputs[0].value || "https://source.unsplash.com/300x300/?person";

  let h4 = document.createElement("h4");
  h4.textContent = inputs[1].value;

  let p1 = document.createElement("p");
  p1.textContent =  inputs[2].value;

  let p2 = document.createElement("p");
  p2.textContent = inputs[3].value;

  card.appendChild(img);
  card.appendChild(h4);
  card.appendChild(p1);
  card.appendChild(p2);

  document.body.appendChild(card);

  inputs.forEach(function (input) {
    if(input.value !== "Submit and Generate Card") {
      input.value = "";
    }
})
  });

