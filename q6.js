function contestScoreJudge() {
  let a = parseInt(prompt("Enter correct answers (a): "));
  let b = parseInt(prompt("Enter partially correct answers (b): "));
  let c = parseInt(prompt("Enter wrong answers (c): "));
  
  let score = 3 * a + b - 2 * c;
  console.log(`Initial score (3*${a} + ${b} - 2*${c}): ${score}`);
  
  if (score < 0) {
    score = 0;
    console.log(`Score was negative, set to 0`);
  }
  
  let totalAnswers = a + b + c;
  if (totalAnswers > 50) {
    score -= 10;
    console.log(`Total answers (${totalAnswers}) > 50, subtract 10: ${score}`);
  } else {
    console.log(`Total answers (${totalAnswers}) <= 50, no deduction`);
  }
  
  let status = score >= 60 ? "PASS" : "FAIL";
  console.log(`Final score: ${score}, Status: ${status}`);
  
  alert(`${score}, ${status}`);
}

contestScoreJudge();
