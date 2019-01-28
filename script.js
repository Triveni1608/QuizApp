// Defining Question Array
var questionArray = [], count = 0;
var question_set;
var result = 0;

// Function constructor to describe a question
function Question(question, answer, correctAnswer) {
    var questionset = {};
    questionset["question"] = question;
    questionset["answer"] = answer;
    questionset["correctAnswer"] = correctAnswer;
    questionArray.push(questionset);
}

var question1 = new Question("Which of the following is correct about features of JavaScript?", ["1.JavaScript is is complementary to and integrated with HTML", "2.JavaScript is open and cross-platform", "3.Both of the above", "4.All of the above"], "3");
var question2 = new Question("Which built-in method returns the character at the specified index?", ["1.characterAt()", "2.getCharAt()", "3.charAt()", "4.None of the above."], "3");
var question3 = new Question("Which built-in method returns the string representation of the number's value?", ["1.toValue()", "2.toNumber()", "3.toString()", "4.None of the above."], "3");
var question4 = new Question("Which of the following function of Array object sorts the elements of an array?", ["1.toSource()", "2.sort()", "3.toString()", "4.unshift()"], "2");
var question5 = new Question("JavaScript is can be written", ["1.directly on the Server Script", "2.None of these", "3.directly into HTML pages", "4.directly into JS file and included into HTML"], "3");
var question6 = new Question("Which method of an Array object adds and/or removes elements from an array", ["1.Reverse", "2.Shift", "3.Slice", "4.Splice"], "3");
var question7 = new Question("Inside which HTML element do we put the JavaScript?", ["1.js", "2.scripting", "3.javascript", "4.script"], "4");
var question8 = new Question("How do you write Hello World in an alert box?", ["1.msgBox('Hello World');", "2.alert('Hello World');", "3.alertBox('Hello World');", "4.msg('Hello World');"], "2");
var question9 = new Question("How to write an IF statement in JavaScript?", ["1.if i == 5 then", "2.if (i == 5)", "3.if i = 5 then", "4.if i = 5"], "2");
var question10 = new Question("What are variables used for in JavaScript Programs?", ["1.Storing numbers, dates, or other values", "2.Varying randomly", "3.Causing high-school algebra flashbacks", "4.None of the above"], "1");

/*Function Call for Quiz*/


window.onload = function (e) {
    document.getElementById("btnId").disabled = false;
    filterQuestion(0);
}

/*Quiz Logic*/
function filterQuestion() {
    console.log("**************************************************************************");
    count = count + 1;
    var txt = "";
    question_set = questionArray[Math.round(Math.random() * (questionArray.length - 1))];
    document.getElementById("questionId").innerHTML = count + " " + question_set.question;
    console.log(count + " " + question_set.question);
    for (var i = 0; i < question_set.answer.length; i++) {
        txt = txt + question_set.answer[i] + "<br>";
        console.log(question_set.answer[i]);
    }
    document.getElementById("answerSetId").innerHTML = txt;
}

function submitAnswer() {
    var current_answer = prompt(question_set.question, "");
    if (current_answer == null) {
        console.log("your current score is: " + result);
        document.getElementById("btnId").disabled = false;
        return;
    } else if ((isNaN(current_answer) && current_answer.toLowerCase() == "exit")) {
        console.log("your final score is: " + result);
        document.getElementById("currentScoreId").innerHTML = "your final score is: " + result;
        document.getElementById("btnId").disabled = true;
        document.getElementById("nextBtnId").disabled = true;
    }
    else if (isNaN(current_answer) || parseInt(current_answer) > 4) {
        console.log("your current score is: " + result);
        document.getElementById("currentScoreId").innerHTML = "your current score is: " + result;
    } else if (current_answer == question_set.correctAnswer) {
        console.log("Your answer is correct");
        document.getElementById("ansId").innerHTML = "Your answer is correct";
        result = result + 1;
        console.log("your current score is: " + result);
        document.getElementById("currentScoreId").innerHTML = "your current score is: " + result;

    } else {
        console.log("Your answer is wrong");
        document.getElementById("ansId").innerHTML = "Your answer is wrong";
        console.log("your current score is: " + result);
        document.getElementById("currentScoreId").innerHTML = "your current score is: " + result;
    }
    document.getElementById("btnId").disabled = true;
}

function nextQuestion() {
    document.getElementById("btnId").disabled = false;
    filterQuestion();
}
