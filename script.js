// CREATE QUIZ. Group quiz objects together in an array. Each object contains: a question, a list of possible answers, a correct answer, points, and origin (book or show).
var quiz = [
    {q: "What is the name of Robb Stark's direwolf?",
    a: ["Shaggydog", "Ghost", "Nymeria", "Grey Wind"],
    correct: "Grey Wind",
    points: 2,
    origin: "show",},
    {q: "Which of the seven kingdoms was not conquered by Aegon I?",
    a: ["The Vale", "The North", "Dorne", "The Iron Islands"],
    correct: "Dorne",
    points: 3,
    origin: "book",},
    {q: "Who is responsible for King Joffrey's death?",
    a: ["Petyr Baelish", "Olenna Martell", "Dontos", "Tyrion Lannister"],
    correct: "Olenna Martell",
    points: 2,
    origin: "show",},
    {q: "Which Stark is the 'King Who Knelt'?",
    a: ["Robb Stark", "Brandon Stark", "Rickard Stark", "Torrhen Stark"],
    correct: "Torrhen Stark",
    points: 3,
    origin: "book",},
    {q: "Where do the Unsullied come from?",
    a: ["Astapor", "Mereen", "Quarth", "Yunkai"],
    correct: "Astapor",
    points: 2,
    origin: "show",},
    {q: "In which book did The Red Wedding happen?",
    a: ["A Feast For Crows", "A Game of Thrones", "A Clash of Kings", "A Storm of Swords"],
    correct: "A Storm of Swords",
    points: 3,
    origin: "book",},
    {q: "Which is NOT a name of one of Daenarys' dragons?",
    a: ["Drogon", "Viserion", "Rhaegal", "Jaeherys"],
    correct: "Jaeherys",
    points: 2,
    origin: "show",},
    {q: "Which one of these is NOT a nickname Arya has gone by?",
    a: ["Lark", "Cat", "Salty", "Weasel"],
    correct: "Lark",
    points: 3,
    origin: "book",},
    {q: "Who was responsible for the creation of the Night King?",
    a: ["The Wildlings", "The First Men", "The Lord of Light", "The Children of the Forest"],
    correct: "The Children of the Forest",
    points: 2,
    origin: "show",},
    {q: "Who is Daenarys Targaryen's second husband?",
    a: ["Daario Naharis", "Hizdar Zo Loraq", "Jon Snow", "Jorah Mormont"],
    correct: "Hizdar Zo Loraq",
    points: 3,
    origin: "book",}];

// function logQuizObjects() {
//     for (var i = 0; i < quiz.length; i++) {
//         console.log("Question: " + quiz[i].q);
//         console.log("Possible answers: " + quiz[i].a[0] + ", " + quiz[i].a[1] + ", " + quiz[i].a[2] + ", " + quiz[i].a[3]);
//         console.log("Correct answer: " + quiz[i].correct);
//         console.log("Points: " + quiz[i].points);
//         console.log("Origin: " + quiz[i].origin);
//         console.log("*****");
//     }
// };
// logQuizObjects()

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

// QUESTION FUNCTIONS
var i = 0;

function getQuizObjects() {
    h1Tag.textContent = quiz[i].q;
    b1Tag.textContent = quiz[i].a[0];
    b2Tag.textContent = quiz[i].a[1];
    b3Tag.textContent = quiz[i].a[2];
    b4Tag.textContent = quiz[i].a[3];
    i++;

}

getQuizObjects()