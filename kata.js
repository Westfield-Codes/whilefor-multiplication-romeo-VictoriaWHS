
/* Multiplication Quiz
 * This program should ask five multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.




/* Setup */
// Define a function called main and then call it up top.
// Define a function called askFive and call it from inside main().
// Define a function called askQuestion and call it from inside askFive() as askQuestion(1);


/* STAGE 1:ASK A QUESTION */


/* askQuestion asks a multiplication question, returns 1 if incorrect
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
// Create a variable named a, and set to a random integer between 3 and 9.
// Create a variable named b, and set to a random integer between 3 and 9.
// Create a variable called product, set as a * b.
// Create a variable called equation, set as the complex string a * b = ?.
// Create a variable called answer, ask user for it by prompting with equation.

// Display "Correct!" and return 0 if the answer and product match.
// Otherwise, display "Incorrect!" and return 1.


/* TEST BEFORE CONTINUING TO STAGE TWO! */


/* STAGE 1:ASK 5 QUESTIONS */


/* askFive calls askQuestion five times, counting and returning number wrong
 * @param: none
 * @return: score (0-5)
 */
// Create a variable score, set to 0
// Write a for loop with question as the index, values 1 to 5
// Call askQuestion in the loop, with question as argument
// Add the returned value of askQuestion to score each time you call it (same line)
// return score after loop finishes


/* TEST BEFORE CONTINUING TO STAGE THREE! */


/* STAGE 3: MULTIPLE TRIES (CHALLENGE!) */


/* Refactor askQuestion per whileQuestions askFive calls askQuestion five times, counting and returning number wrong
 * Use the whileQuestions tab in the flowchart to guide you.
 * @param: none
 * @return: score (0-5)
 */


