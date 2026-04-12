function skippingNumbers() {
  let N = parseInt(prompt("Enter N: "));
  let seed = parseInt(prompt("Enter seed: "));
  
  let divisor = seed + 2; 
  let sum = 0;
  let m = 0;
  console.log(`Target: ${N}, Divisor to skip: ${divisor}`);
  while (sum < N) {
    m++;
    
    if (m % divisor !== 0) {
      sum += m;
      console.log(`m=${m} (not divisible by ${divisor}), sum=${sum}`);
    } else {
      console.log(`m=${m} (divisible by ${divisor}, skipped)`);
    }
  }
  
  alert(`${m} ${sum}`);
}
skippingNumbers();
