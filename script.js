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
    {q: "Where do the Unsullied come from?",
    a: ["Astapor", "Mereen", "Quarth", "Yunkai"],
    correct: "Astapor",
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

var answerList = [];
var quizProgress = 0;
var pointsTotal = 0;

// function logquizObjects() {
//     for (var i = 0; i < quizList.length; i++) {
//         console.log("Question: " + quizList[i].q);
//         console.log("Possible answers: " + quizList[i].a[0] + ", " + quizList[i].a[1] + ", " + quizList[i].a[2] + ", " + quizList[i].a[3]);
//         console.log("Correct answer: " + quiz[i].correct);
//         console.log("Points: " + quizList[i].points);
//         console.log("Origin: " + quizList[i].origin);
//         console.log(quizList[i].footnote);
//         console.log("*****");
//     }
// };
// logquizObjects()

// DECLARE VARIABLES FOR CREATING ELEMENTS.
// var h1Tag = document.createElement("h1");
// var b1Tag = document.createElement("button");
// var b2Tag = document.createElement("button");
// var b3Tag = document.createElement("button");
// var b4Tag = document.createElement("button");
// var hrTag = document.createElement("hr");
// var h2Tag = document.createElement("h2");

var h1Tag = document.getElementById("question-text");
var b1Tag = document.getElementById("answer1");
var b2Tag = document.getElementById("answer2");
var b3Tag = document.getElementById("answer3");
var b4Tag = document.getElementById("answer4");
var h2Tag = document.getElementById("footnote");
var buttonList = document.getElementsByClassName("button");

///// FUNCTIONS /////

function getquizObjects() {
    h1Tag.textContent = quizList[quizProgress].q;
    b1Tag.textContent = quizList[quizProgress].a[0];
    b2Tag.textContent = quizList[quizProgress].a[1];
    b3Tag.textContent = quizList[quizProgress].a[2];
    b4Tag.textContent = quizList[quizProgress].a[3];
    h2Tag.textContent = quizList[quizProgress].footnote;
}
function recordAnswerB1() {
    answerList.push(b1Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;
    }
}
function recordAnswerB2() {
    answerList.push(b2Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;

    }
}
function recordAnswerB3() {
    answerList.push(b3Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;
    }
}
function recordAnswerB4() {
    answerList.push(b4Tag.textContent);
    if (answerList[quizProgress] === quizList[quizProgress].correct) {
        pointsTotal += quizList[quizProgress].points;
    }
}

///// EVENT LISTENERS /////
// Record answers to answerList and add points to pointsTotal.
b1Tag.addEventListener("click", recordAnswerB1);
b2Tag.addEventListener("click", recordAnswerB2);
b3Tag.addEventListener("click", recordAnswerB3);
b4Tag.addEventListener("click", recordAnswerB4);

///// EXECUTE /////
getquizObjects();

console.log(answerList);
console.log(pointsTotal);
console.log(quizProgress);