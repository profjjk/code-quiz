///// DECLARE VARIABLES /////
var quizList = [
    {q: "What is the name of Robb Stark's direwolf?",
    a: ["Shaggydog", "Ghost", "Nymeria", "Grey Wind"],
    correct: "Grey Wind",
    points: 2,
    origin: "show",
    footnote: "FUN FACT: Although Sansa's direwolf, Lady, saw an untimely end in the show, the dog who played the well-behaved beast survived the ordeal and was later adopted by Sophie Turner, the actress that played Sansa Stark."},
    {q: "Which of the seven kingdoms was not conquered by Aegon I?",
    a: ["The Vale", "The North", "Dorne", "The Iron Islands"],
    correct: "Dorne",
    points: 3,
    origin: "book",
    footnote: "FUN FACT: Peter Dinklage, who portrays Tyrion Lannister in the show, appears in more episodes than any other cast member. He is in a total of 61 out of 67 episodes."},
    {q: "Who is responsible for King Joffrey's death?",
    a: ["Petyr Baelish", "Olenna Martell", "Dontos", "Tyrion Lannister"],
    correct: "Olenna Martell",
    points: 2,
    origin: "show",
    footnote: "FUN FACT: Jack Gleeson, who plays the sadistic and cruel King Joffrey, says that his portrayal of the loathsome boy-king was partly influenced by Joaquin Phoenix’s Commodus in 'Gladiator'."},
    {q: "Which Stark is the 'King Who Knelt'?",
    a: ["Robb Stark", "Brandon Stark", "Rickard Stark", "Torrhen Stark"],
    correct: "Torrhen Stark",
    points: 3,
    origin: "book",
    footnote: "FUN FACT: The Stark children were all aged up for the series. At the start of George R.R. Martin's novels, Robb Stark and Jon Snow are 14 years old, Sansa Stark is 11, Arya is 9, Bran is 7, and Rickon Stark is just 3 years old."},
    {q: "What is the name of Arya's sword?",
    a: ["Pointy", "Widow's Wail", "Fang", "Needle"],
    correct: "Needle",
    points: 2,
    origin: "show",
    footnote: "FUN FACT: While filming season 7 in Iceland, temperatures sometimes dropped down to -20°F (-28°C)."},
    {q: "In which book did The Red Wedding happen?",
    a: ["A Feast For Crows", "A Game of Thrones", "A Clash of Kings", "A Storm of Swords"],
    correct: "A Storm of Swords",
    points: 3,
    origin: "book",
    footnote: "FUN FACT: Kit Harington and Rose Leslie, who played on-screen lovers Jon Snow and Ygritte, fell in love off-screen as well and later married."},
    {q: "Which is NOT a name of one of Daenarys' dragons?",
    a: ["Drogon", "Viserion", "Rhaegal", "Jaeherys"],
    correct: "Jaeherys",
    points: 2,
    origin: "show",
    footnote: "FUN FACT: One of the petrified dragon eggs from season 1 was given to author George R.R. Martin as a wedding gift."},
    {q: "Which one of these is NOT a nickname Arya has gone by?",
    a: ["Lark", "Cat", "Salty", "Weasel"],
    correct: "Lark",
    points: 3,
    origin: "book",
    footnote: "FUN FACT: Kit Harington claims his ancestor is John Harington, a prominent figure in Queen Elizabeth I's court, as well as the inventor of the flush toilet. Kit also says his ancestor is the reason we sometimes refer to the toilet as 'the john'."},
    {q: "Who was responsible for the creation of the Night King?",
    a: ["The Wildlings", "The First Men", "The Lord of Light", "The Children of the Forest"],
    correct: "The Children of the Forest",
    points: 2,
    origin: "show",
    footnote: "FUN FACT: A replica of Gandalf's sword, Glamdring, from the 'Lord of the Rings' and 'Hobbit' trilogies is forged inside the Iron Throne."},
    {q: "Who is Daenarys Targaryen's second husband?",
    a: ["Daario Naharis", "Hizdar Zo Loraq", "Jon Snow", "Jorah Mormont"],
    correct: "Hizdar Zo Loraq",
    points: 3,
    origin: "book",
    footnote: "FUN FACT: When Emilia Clarke first met her on-screen husband Jason Momoa, he screamed 'WIFEY!', ran across the hall, and rugby-tackled her to the floor."}];
// Holding containers to track answers, points, and progress.
var answerList = [];
var quizProgress = 0;
var pointsTotal = 0;
var pointsPossible = 25;
var timeSec = 59;
// Create pointers.
var timerTag = document.getElementById("countdown");
var divQ = document.getElementById("question-section");
var divA = document.getElementById("answer-section");
var divF = document.getElementById("fact-section");
var h1Wel = document.getElementById("welcome");
var h1Tag = document.getElementById("question");
var b1Beg = document.getElementById("begin");
var b1Tag = document.getElementById("answer1");
var b2Tag = document.getElementById("answer2");
var b3Tag = document.getElementById("answer3");
var b4Tag = document.getElementById("answer4");
var h2Tag = document.getElementById("footnote");
var h1Res = document.getElementById("game-over");
var h2Res = document.getElementById("percentage");

///// CREATE ELEMENTS /////
// Create elements.
h1Tag = document.createElement("h1");
h1Res = document.createElement("h1");
b1Tag = document.createElement("button");
b2Tag = document.createElement("button");
b3Tag = document.createElement("button");
b4Tag = document.createElement("button");
hrTag = document.createElement("hr");
h2Tag = document.createElement("h2");
h2Res = document.createElement("h2");
// Assign attributes to elements.
h1Tag.setAttribute("id", "question-text");
b1Tag.setAttribute("class", "button");
b1Tag.setAttribute("id", "answer1");
b2Tag.setAttribute("class", "button");
b2Tag.setAttribute("id", "answer2");
b3Tag.setAttribute("class", "button");
b3Tag.setAttribute("id", "answer3");
b4Tag.setAttribute("class", "button");
b4Tag.setAttribute("id", "answer4");
h2Tag.setAttribute("id", "footnote");
h1Res.setAttribute("id", "game-over");
h2Res.setAttribute("id", "percentage");

///// FUNCTIONS /////
// Countdown timer | game time-out.
function countDownTimer() {
    var timer = setInterval(function() {
        timeSec--;
        if (timeSec >= 10) {
            timerTag.textContent = " 0:" + timeSec;
        } else {
            timerTag.textContent = " 0:0" + timeSec;
        }
        if (timeSec === 0 || answerList.length === quizList.length) {
            clearInterval(timer);
            timerTag.textContent = " 0:00";
            endGame();
            displayResults();
        }
    }, 1000);
}
// Retrieve data from quizList.
function getQuizObjects() {
    if (answerList.length < quizList.length) {
        h1Tag.textContent = quizList[quizProgress].q;
        b1Tag.textContent = quizList[quizProgress].a[0];
        b2Tag.textContent = quizList[quizProgress].a[1];
        b3Tag.textContent = quizList[quizProgress].a[2];
        b4Tag.textContent = quizList[quizProgress].a[3];
        h2Tag.textContent = quizList[quizProgress].footnote;
    }
}
// Record button clicks.
function recordAnswerB1() {
    answerList.push(b1Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;
    } else {
        timeSec -= 5;
    }
    if (answerList.length === quizList.length) {
        endGame();
        displayResults();
    }
    quizProgress++;
}
function recordAnswerB2() {
    answerList.push(b2Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;
    } else {
        timeSec -= 5;
    }
    if (answerList.length === quizList.length) {
        endGame();
        displayResults();
    }
    quizProgress++;
}
function recordAnswerB3() {
    answerList.push(b3Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;
    } else {
        timeSec -= 5;
    }
    if (answerList.length === quizList.length) {
        endGame();
        displayResults();
    }
    quizProgress++;
}
function recordAnswerB4() {
    answerList.push(b4Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;
    } else {
        timeSec -= 5;
    }
    if (answerList.length === quizList.length) {
        endGame();
        displayResults();
    }
    quizProgress++;
}
// Remove welcome elements.
function removeWelcome() {
    divQ.removeChild(h1Wel);
    divA.removeChild(b1Beg);
}
// Add game elements.
function addQuizElements() {
    divQ.appendChild(h1Tag);
    divA.appendChild(b1Tag);
    divA.appendChild(b2Tag);
    divA.appendChild(b3Tag);
    divA.appendChild(b4Tag);
    divF.appendChild(hrTag);
    divF.appendChild(h2Tag);
}
function endGame() {
        divQ.removeChild(h1Tag);
        divA.removeChild(b1Tag);
        divA.removeChild(b2Tag);
        divA.removeChild(b3Tag);
        divA.removeChild(b4Tag);
        divF.removeChild(hrTag);
        divF.removeChild(h2Tag);
}
// Display results.
function displayResults() {
    divQ.appendChild(h1Res);
    if (((pointsTotal/pointsPossible) * 100) >= 85) {
        h1Res.textContent = "The Throne Is Yours";
    } else {
        h1Res.textContent = "Valar Morghulis";
    }
    divA.appendChild(h2Res);
    h2Res.textContent = "Score: " + ((pointsTotal/pointsPossible) * 100) + "%";
}

///// EVENT LISTENERS /////
// Welcome - quiz transition.
b1Beg.addEventListener("click", removeWelcome);
b1Beg.addEventListener("click", countDownTimer);
b1Beg.addEventListener("click", addQuizElements);
b1Beg.addEventListener("click", getQuizObjects);
// Record answers and assign points.
b1Tag.addEventListener("click", recordAnswerB1);
b2Tag.addEventListener("click", recordAnswerB2);
b3Tag.addEventListener("click", recordAnswerB3);
b4Tag.addEventListener("click", recordAnswerB4);
// Write quiz data to page.
b1Tag.addEventListener("click", getQuizObjects);
b2Tag.addEventListener("click", getQuizObjects);
b3Tag.addEventListener("click", getQuizObjects);
b4Tag.addEventListener("click", getQuizObjects);

///// EXECUTE /////
endGame();



///// TO DO //////
// Get results to display.
// Create interval timer.
// Create scoreboard that can store info.


// After the last question is submitted... clear screen except for h1... rewrite h1 with statement about the results, something fun like Valar Marghulis (all men must die) if they did poorly. So I need to create a few text option for h1, and the one that executes will depend on the score. I want the score displayed as a percentage in the middle of the screen. In order to calculate a percentage, I need to create a variable that holds the value of all possible points, and then do some division to get the resulting percentage.

