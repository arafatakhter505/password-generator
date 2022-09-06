const showPassword = document.getElementById("show-pass");
const copyBtn = document.getElementById("copy-btn");
const uCase = document.getElementById("u-case");
const lCase = document.getElementById("l-case");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateBtn = document.getElementById("generate-btn");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const passLength = document.getElementById("pass-length");
let pLength = parseInt(passLength.innerText);

const uCaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCaseValue = "abcdefghijklmnopqrstuvwxyz";
const numberValue = "0123456789";
const symbolValue = "!@#$%^&*=-_";

plus.addEventListener("click", () => {
  if (pLength < 12) {
    pLength++;
    passLength.innerText = pLength;
  }
});

minus.addEventListener("click", () => {
  if (pLength > 4) {
    pLength--;
    passLength.innerText = pLength;
  }
});

generateBtn.addEventListener("click", () => {
  let choosePass = "";
  uCase.checked ? (choosePass += uCaseValue) : "";
  lCase.checked ? (choosePass += lCaseValue) : "";
  number.checked ? (choosePass += numberValue) : "";
  symbol.checked ? (choosePass += symbolValue) : "";
  showPassword.innerText = generatePassword(pLength, choosePass);
});

const generatePassword = (l, choosePass) => {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += choosePass.charAt(Math.floor(Math.random() * choosePass.length));
  }
  return pass;
};

copyBtn.addEventListener("click", () => {
  if (showPassword.innerText !== "") {
    navigator.clipboard.writeText(showPassword.innerText);
    alert(`Copy Pass: ${showPassword.innerText}`);
  }
});
