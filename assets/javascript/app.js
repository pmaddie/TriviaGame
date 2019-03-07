// set variables //
var correctAnswer = ("Great job!");
var incorrectAnswer = ("Nice try, but not good enough!");
var unanswered = ("Time's Up!");



// questions: 
var questions = [{
    question: "Which of these type of restaraunts would I prefer to eat at the most?",
    answerChoices: ["Fancy, High Class", "Local Hidden Gems", "Chain Restaraunts such as Olive Garden or Buffalo Wild Wings", "Fast Food"],
    correct: "Local Hidden Gems",
},
{
    question: "True or False, I was born in August",
    answerChoices: ["True", "False"],
    correct: "false",
},
{
    question: "How old am I?",
    answerChoices: ["23", "24", "25", "26"],
    correct: "25",
},
{
    question: "I have a child.",
    answerChoices: ["True", "False"],
    correct: "false"
},
{
    question: "What year did I graduate high school?",
    answerChoices: ["2010", "2011", "2012", "2013"],
    correct: "ttyg",
},
{
    question: "I am a fan of meditating.",
    answerChoices: ["True", "False"],
    correct: "true",
},
{
    question: "Who is my favorite athlete?",
    answerChoices: ["Christiano Renaldo", "LeBron James", "Tom Brady", "Paul George"],
    correct: "LeBron James",
},
{
    question: "I hate driving!!",
    answerChoices: ["True", "False"],
    correct: "false",
},
{
    question: "If you know me, you know that I am very...",
    answerChoices: ["Driven", "Organized", "Mature", "Sassy"],
    correct: "driven",
},
{
    question: "More times than not, I will skip out on dessert",
    answerChoices: ["True", "False"],
    correct: "false",
}];
// console log to check 
console.log(questions[1].question)
console.log(questions[3].correct)
console.log(questions[0].correct)


//timer:
var timer = 15;



//START Button//
$(".start").click(function(){ 
    console.log("clicked");
    //this hides the start button //
    $(".start").hide();
    //show all the questions :
    displayQuestions()
  });
  
  $().click(function(){
    $("").show();
  });

function displayQuestions () {
    // get questions out of the array
    for (i = 0; i < questions.length; i++) {
         // grabs all of the questions from the questions array
        let question = $("<p>" + questions[i].question + "<br>")
        // puts the actual questions on the page, 
        $("#trivia").append(question);

        for (j = 0; j < questions[i].answerChoices.length; j++) {
            let answers = $("<button>" + questions[i].answerChoices[j] + "<br>");
            answers.attr("data", questions[i].answerChoices[j]).addClass("answer");
            console.log(answers);
            //put answers on page under each question
            $("#trivia").append(answers);
        }
    }

}
//on click for answer buttons
$(document).on("click",".answer",(event) => {
    //need to get what they pick
    let userAnswer = $(this).attr("data");
    console.log("The users answer is : " + userAnswer);
    
    //Cjeck their answer against questions[i].correct
    if(userAnswer === correct){
// figure out how to get attr out and figure out how to check user answer against correct //
    }
})


// var rightAnswertext = questions[currentquestion].answerList[questions[currentquestion].answer];
//     var rightAnswerindex = questions[currentquestion].answer;


//     if((userSelection == rightAnswerindex) && (answered == true)){
//         correct++;




var right = 0;
var wrong = 0;
var unanswered = 0;








$(document).ready(function () {
    console.log("ready!");




});


// puedocode : 
// create start button
// once click the start button, the button will go away, and the trivia will be revealed with a timer at the top.
// answer the questionaire before the timer goes off. 
// the users answers will be checked against the correct answers.  
// once the timer goes off, you will be taken to a different screen where all correct, incorrect
// and unanswered questions will be displayed.
