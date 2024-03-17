const outPutColor = document.querySelector("#output");
const container = document.querySelector(".container");
const getNewColorBtn = document.querySelector(".newColor");
const copyColorBtn = document.querySelector(".copyColor");
// output color code
let code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
getNewColorBtn.addEventListener("click", function setHexColor() {
  let newColorCode = getColorCode().toUpperCase();
  console.log(newColorCode);
  outPutColor.textContent = newColorCode;
  outPutColor.style.color = newColorCode;
  container.style.backgroundColor = "#fff";
  document.body.style.backgroundColor = newColorCode;
});

function getColorCode() {
  let colorHex = "#";
  for (let i = 1; i <= 6; i++) {
    colorHex += code[getRandomCode()];
  }
  console.log(colorHex);
  return colorHex;
}
// generate random number
function getRandomCode() {
  return Math.floor(Math.random() * code.length);
}
// copy color code
copyColorBtn.addEventListener("click", () => {
  let tempCode = getColorCode();
  console.log(tempCode);
  navigator.clipboard.writeText(tempCode);
  outPutColor.style.backgroundColor = "#1DA1F2";
  document.querySelector("#alert").style.display = "block";
  setTimeout(function () {
    document.querySelector("#alert").style.display = "none";
  }, 1000);
});
