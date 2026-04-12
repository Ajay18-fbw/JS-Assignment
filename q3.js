function isPalindrome(n) {
  let str = String(n);
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

function mirrorCorridor() {
  let N = parseInt(prompt("Enter N: "));
  let K = parseInt(prompt("Enter K: "));
  
  for (let X = 0; X <= 100000; X++) {
    let number = N + X;
    if (isPalindrome(number) && number % K === 0) {
      console.log(`Found: N=${N}, X=${X}, N+X=${number}`);
      alert(`${X}`);
      return;
    }
  }
  alert(`-1`);
}
mirrorCorridor();
