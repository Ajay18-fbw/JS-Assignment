function rollSeedLock() {
  let N = parseInt(prompt("Enter N: "));
  let seed = parseInt(prompt("Enter seed: "));
  
  let original = N;
  

  for (let i = 0; i < 3; i++) {
    if (N % 2 === 0) {
  
      N = N / 2 + seed;
    } else {

      N = N * 3 - seed;
    }
    console.log(`Step ${i + 1}: ${N}`);
  }


  N = Math.round(N);


  let strN = String(N);
  let middleDigit = -1;
  
  if (strN.length === 3) {
    middleDigit = parseInt(strN[1]); 
  }
  
  let isInRange = N >= 100 && N <= 999;
  let isMiddleCorrect = middleDigit === seed;
  
  console.log(`Final: ${N}, Range [100-999]? ${isInRange}, Middle digit: ${middleDigit}, Seed: ${seed}`);
  
  if (isInRange && isMiddleCorrect) {
    alert(`YES, ${N}`);
  } else {
    alert(`NO, ${N}`);
  }
}
rollSeedLock();
