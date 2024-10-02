let tong = 0;
function solve3(a) {
  if (a % 3 === 0) return 1;
  else return 0;
}
function solve5(a) {
  if (a % 5 === 0) return 1;
  else return 0;
}

function checkNumber(n) {
  if (n < 0 && n != "Number") {
    return console.log("Invalid");
  } else if (solve3(n) && solve5(n) > 0) {
    return console.log("Chia hết cho cả 3 số: 3, 5 và 15");
  } else if (solve5(n) > 0) return console.log("Chia hết cho 5");
  else if (solve3(n) > 0) {
    return console.log("Chia hết cho 3");
  } else return console.log("Không chia hết");
}
checkNumber(12);
checkNumber(15);
checkNumber(10);
checkNumber("15");
checkNumber(11);
