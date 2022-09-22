// set
function handleplayers() {
  const playerOne = document.getElementById("fplayer").value;
  const playerTwo = document.getElementById("splayer").value;
  localStorage.setItem("Fplayer", playerOne);
  localStorage.setItem("Splayer", playerTwo);
  return;
}

// get

document.getElementById("showFplayer").innerHTML =
  localStorage.getItem("Fplayer");
document.getElementById("showSplayer").innerHTML =
  localStorage.getItem("Splayer");

// games play //

const getItems = document.querySelectorAll(".grid-item");

let turn = "o";

// console.log(getItems);

getItems.forEach((getItem) => {
  getItem.addEventListener("click", () => setValue(getItem));
});




let arry = ["", "", "", "", "", "", "", "", ""];
const x = Array.from(getItems);


function setValue(symbole) {
  if (symbole.innerHTML == "") {
    if (turn == "o") {
      symbole.innerHTML = "x";
      turn = "x";

      let g = x.indexOf(symbole);
      arry[g] = symbole.innerText;

      if (result()) {

        setTimeout(function () {
          alert(localStorage.getItem("Fplayer"));}, 100);
      }

    } else {
      symbole.innerHTML = "o";
      turn = "o";
      let c = x.indexOf(symbole);
      arry[c] = symbole.textContent;

      if (result()) {

        setTimeout(function () {
          alert(localStorage.getItem("Splayer"));}, 100);
      
      }
    }
  }
}


// get result
function result() {
  if (
    (arry[0] == arry[1] && arry[1] == arry[2] && arry[2] != "") ||
    (arry[3] == arry[4] && arry[4] == arry[5] && arry[5] != "") ||
    (arry[6] == arry[7] && arry[7] == arry[8] && arry[8] != "") ||
    (arry[0] == arry[3] && arry[3] == arry[6] && arry[6] != "") ||
    (arry[1] == arry[4] && arry[4] == arry[7] && arry[7] != "") ||
    (arry[2] == arry[5] && arry[5] == arry[8] && arry[8] != "") ||
    (arry[0] == arry[4] && arry[4] == arry[8] && arry[8] != "") ||
    (arry[2] == arry[4] && arry[4] == arry[6] && arry[6] != "")
  ) {
    return true;
  } else {
    return false;
  }
}
