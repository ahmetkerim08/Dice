const dice1 = document.querySelector(".dice-1");
const dice2 = document.querySelector(".dice-2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 6 + 1);
  let random2 = Math.floor(Math.random() * 6 + 1);
  let toplam = random + random2;
  const p = (document.getElementById("paragraf").innerHTML = toplam);

  dice1.src = `/img/dice-${random}.png`;
  dice2.src = `/img/dice-${random2}.png`;
});
