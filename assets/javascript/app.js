$(document).ready(function () {
    console.log("ready!");


    // set variables //


    // var correctAnswer = ("Great job!");
    // var incorrectAnswer = ("Nice try, but not good enough!");
    // var unanswered = ("Time's Up!");


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


     // start/stop of timer:
     var timer = 30;
     var intervalID;
     var correctAnswerCount = 0;
     var wrongAnswerCount = 0;
     var holder = [];

    //attribute for correct answer
    $("#trivia").append(answers);




    //START Button//
    $(".start").click(function () {
        //this hides the start button //
        $(".start").hide();
        //show all the questions :
        displayQuestions();
        runTimer();
        for (var i = 0; i < questions.length; i++) {
            holder.push(questions[i]);
        }

    });

    //   $().click(function(){
    //     $("").show();
    //   });
    console.log(questions);
    function displayQuestions() {
        // get questions out of the array
        for (var i = 0; i < questions.length; i++) {
            // grabs all of the questions from the questions array
            let question = $("<p>" + questions[i].question + "<br>")
            // puts the actual questions on the page, 
            $("#trivia").append(question);

            for (var j = 0; j < questions[i].answerChoices.length; j++) {
                let answers = $("<button>" + questions[i].answerChoices[j] + "<br>");
                answers.attr("data", questions[i].answerChoices[j]).addClass("answer");
                //Add the attribute that contains the correct answer
                answers.attr("correct", questions[i].correct);
                console.log(answers);
                //put answers on page under each question
                $("#trivia").append(answers);
            }
        }

    }
    function runTimer() {
        if (!running) {
            intervalID = setInterval(decrement, 1000);
            running = true;
        }
    }

    //timer countdown
    function decrement() {
        $("#timeleft").html("<h2>Time Remaining: " + timer + "</h2>");
        timer--;


        // stop timer once it reaches 0
        if (timer === -1) {
            clearInterval(intervalID);
            $("#answerblock").html("<p>All out of time! Check your answers below.</p>");
            $("#trivia").hide();
            scoreboard();
        }
    }

    function scoreboard() {
        $("#correctquestions").html("<p>Correct Answers : " + correctAnswerCount + "</p>");
        $("#incorrectquestions").html("<p>Incorrect Answers : " + wrongAnswerCount + "</p>");

    }


    // // on click for answer buttons
    // $(document).on("click",".answer",function(event) {
    //     //need to get what they pick
    //     let userAnswer = $(this).attr("data");
    //     // check(userAnser)
    //     console.log("The users answer is : " + userAnswer);


    $(document).on("click", ".answer", function (event) {

        let userAnswer = $(this).attr("data");
        console.log("Current User Guess" +  userAnswer);
        console.log("Correct Answer" + $(this).attr("correct"));

        //Check their answer against questions[i].correct

        // figure out how to get attr out and figure out how to check user answer against correct //

        
        
        if ( userAnswer === $(this).attr("correct")) {
            console.log("User Guess was " +  userAnswer);

            correctAnswerCount++;
            scoreboard();
            console.log(correctAnswerCount);
        }
        else {
            console.log("User Guess was " +  userAnswer);
            wrongAnswerCount++;
            scoreboard();
            console.log("Wrong Answer count:" + wrongAnswerCount);
        }
    });

    // why isnt my user answer checking againt the correct answer. also it is racking up only wrong answer points. >.<


   

    var running = false;
    //timer:



    // puedocode : 
    // create start button
    // once click the start button, the button will go away, and the trivia will be revealed with a timer at the top.
    // answer the questionaire before the timer goes off. 
    // the users answers will be checked against the correct answers.  
    // once the timer goes off, you will be taken to a different screen where all correct, incorrect
    // and unanswered questions will be displayed.



    // so now i need to check the users guess against the correct answer which i created the var correctCorrect with
    //  an array of all the correct answers in the questons array
});