# JS Assignment - 6 JavaScript Problems

This is my solution for the JavaScript Assignment. It has 6 programs that we need to solve.

---

## What is This Project?

6 JavaScript problems. Each one uses `prompt()` to take input and `alert()` to show output. Total 60 points.

---

## The 6 Problems

### Problem 1: Digit Gatekeeper (10 points)

What to do: Count numbers in range [L, R] that are:
- Divisible by K
- Have a prime digit sum (like 2, 3, 5, 7, 11)
- Don't have the digit 0

Example: L=1, R=50, K=4
Answer: 3

Code: `q1.js`

---

### Problem 2: Roll-Seed Lock (10 points)

What to do: Change N three times:
- If N is even: N = N/2 + seed
- If N is odd: N = N*3 - seed

Then check if final number is between 100-999 AND the middle digit equals seed.

Example: N=37, seed=4
Answer: YES, 947

Code: `q2.js`

---

### Problem 3: Mirror Corridor (10 points)

What to do: Find the smallest X (from 0 to 100000) where:
- N + X is a palindrome (like 121, 1331)
- N + X is divisible by K

Example: N=37, K=6
Answer: 29

Code: `q3.js`

---

### Problem 4: Fare Calculator (10 points)

What to do: Calculate fare step by step:
1. fare = base + 7 * distance
2. If minutesLate > 15, add 20
3. If distance > 10, add 10% charge
4. If seed is odd, subtract seed. If even, add seed
5. Round UP to nearest 5

Example: base=50, distance=8, minutesLate=20, seed=3
Answer: 125

Code: `q4.js`

---

### Problem 5: Skipping Numbers (10 points)

What to do: Find smallest m where the sum of numbers from 1 to m that are NOT divisible by (seed+2) is at least N.

Example: N=100, seed=3
Answer: 15 105

Code: `q5.js`

---

### Problem 6: Score Judge (10 points)

What to do: Calculate score:
1. score = 3*a + b - 2*c
2. If score is negative, make it 0
3. If total answers > 50, subtract 10
4. If score >= 60, it's PASS, else FAIL

Example: a=20, b=15, c=4
Answer: 67, PASS

Code: `q6.js`

---

## How to Run the Code

### Easy Way (Use HTML File)

Just open `index.html` in your browser. It has buttons for all 6 problems. Click a button, enter the numbers, and see the answer.

### Console Way

1. Press F12 in browser
2. Go to Console
3. Copy code from any .js file
4. Paste it in console
5. Press Enter and enter numbers

---

## Files in This Project

- `q1_digit_gatekeeper.js` - Problem 1
- `q2_roll_seed_lock.js` - Problem 2
- `q3_mirror_corridor.js` - Problem 3
- `q4_fare_calculator.js` - Problem 4
- `q5_skipping_numbers.js` - Problem 5
- `q6_contest_score_judge.js` - Problem 6

- `README.md` - This file

---

## Test Cases to Check

```
Q1: L=1, R=50, K=4 → Should be 3
Q2: N=37, seed=4 → Should be YES, 947
Q3: N=37, K=6 → Should be 29
Q4: base=50, distance=8, minutesLate=20, seed=3 → Should be 125
Q5: N=100, seed=3 → Should be 15 105
Q6: a=20, b=15, c=4 → Should be 67, PASS
```

---

## How to Submit on GitHub

1. Make a folder called `JS-Assignment`
2. Put all .js files in it
3. Open terminal in that folder
4. Run these commands:

```
```

---

## Simple Tips

- Use `console.log()` to debug and see what's happening
- Test each problem with the example inputs first
- Check that your answer matches the expected answer
- All code is plain JavaScript, no libraries needed

---

## What I Learned

- How to use loops and if statements
- How to write helper functions
- How to check if a number is prime
- How to reverse strings for palindrome check
- How to use modulo for divisibility
- How to round numbers

---

That's it! This project has 6 simple JavaScript programs that solve real problems.
