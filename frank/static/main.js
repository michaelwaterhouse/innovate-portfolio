const franksHead= document.getElementById("primary-icon")

console.log (franksHead)

function spin () {
  franksHead.classList.add("spin");
}

franksHead.onmouseover = spin;

function stopSpin () {
  franksHead.classList.remove("spin");
}
franksHead.onmouseleave = stopSpin;