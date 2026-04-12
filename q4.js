function fareCalculator() {
  let base = parseInt(prompt("Enter base: "));
  let distance = parseInt(prompt("Enter distance: "));
  let minutesLate = parseInt(prompt("Enter minutesLate: "));
  let seed = parseInt(prompt("Enter seed: "));

  let fare = base + 7 * distance;
  console.log(`Step 1 (base + 7*distance): ${fare}`);

  if (minutesLate > 15) {
    fare += 20;
    console.log(`Step 2 (late charge): ${fare}`);
  } else {
    console.log(`Step 2 (no late charge): ${fare}`);
  }
  if (distance > 10) {
    let surcharge = Math.floor(fare * 0.10);
    fare += surcharge;
    console.log(`Step 3 (distance surcharge): ${fare}`);
  } else {
    console.log(`Step 3 (no distance surcharge): ${fare}`);
  }
  if (seed % 2 === 1) {
    fare -= seed;
    console.log(`Step 4 (seed odd, subtract): ${fare}`);
  } else {

    fare += seed;
    console.log(`Step 4 (seed even, add): ${fare}`);
  }
  
  let finalFare = Math.ceil(fare / 5) * 5;
  console.log(`Step 5 (round to multiple of 5): ${finalFare}`);
  
  alert(`${finalFare}`);
}
fareCalculator();
