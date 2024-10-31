/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */

main();
//My attempt//
/* Multiplication Quiz */
// Create 2 variables, a & b, and set to random integers between 3 and 9
// Display them as the equation:  a * b = ??
// Convert this display (same line, not new) to a question and store input in a variable called entry
// Set a variable product to be the product of a and b
// Say "Correct!" if the entry and product match, "Incorrect!" if not.
// Embed the submission and feedback in While loop that continues until entry matches either product, or = "q".
// Embed all this code in a For loop and run it 5 times.
//math.floor, gets rid of decimals.  Math random generates number and times 3 = 2//
function quizQuestion(question){
    let a = Math.floor(Math.random()*7)+3; 
    let b = Math.floor(Math.random()*7)+3;
    let equation = a*b;
    let entry = 0;
    while (entry != equation && entry != "q"){
        entry= prompt("question " + question + ": what is " + a + " * " + b + " ?");
        if (entry == a *b ) alert("correct.")
            else alert("incorrect");
        //must return to 1 but idk how//
    }
}
    function main() {
        for (let question =1; question <=5; question++){
            quizQuestion(question);
    
    }
    
}
function askFive(){
    askQuestion();
    askQuestion();
    askQuestion();
    askQuestion();
    askQuestion();

}
var score =0;
for (let question=1; question<6; question = question +//???)//
    



/* Prompt with Conditional */

//10 /24/2024//

/* Multiplication Quiz */
// Create 2 variables, a & b, and set to random integers between 3 and 9
// Display them as the equation:  a * b = ??
// Convert this display (same line, not new) to a question and store input in a variable called entry
// Set a variable product to be the product of a and b
// Say "Correct!" if the entry and product match, "Incorrect!" if not.
// Embed the submission and feedback in While loop that continues until entry matches either product, or = "q".
// Embed all this code in a For loop and run it 5 times.
//math.floor, gets rid of decimals.  Math random generates number and times 3 = 2//
function quizQuestion(question){
    let a = Math.floor(Math.random()*7)+3; 
    let b = Math.floor(Math.random()*7)+3;
    let product = a*b;
    let entry = 0;
    while (entry != product && entry != "q"){
        entry= prompt("question " + question + ": what is " + a + " * " + b + " ?");
        if (entry == a *b ) alert("correct.")
            else alert("incorrect");
        
    }
}
    function main() {
        for (let question =1; question <=5; question++){
        quizQuestion(question);
    
    }
    
}
