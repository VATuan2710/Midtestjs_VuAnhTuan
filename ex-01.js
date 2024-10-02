let fare = 0;
function taxiFare(km) {
  if (km <= 0 && km != "Number") {
    console.log("invalid");
  } else if (km <= 1 && km > 0) {
    fare = km * 5000;
  } else if (km > 1 && km <= 30) {
    fare = 5000 + (km - 1) * 4000;
  } else {
    fare = 5000 + 4000 * 29 + (km - 30) * 3000;
  }
  return fare;
}
console.log(taxiFare(29));
