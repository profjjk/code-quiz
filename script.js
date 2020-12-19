var bookQuestions = []

// Create an array of objects to represent the questions and their answers.
// Odd-index questions are from the show, even-index questions are from the books.

// Separate objects for each question.
var bookQ1 = {
    q: "Which of the seven kingdoms was not conquered by Aegon I?",
    a: ["The Vale", "The North", "Dorne", "The Iron Islands"]
};
// Objects all grouped together.
var bookQ = [
    {bQ1: "Which of the seven kingdoms was not conquered by Aegon I?",
    bA1: ["The Vale", "The North", "Dorne", "The Iron Islands"]},
]

var questions = [
    {q1: "Question 1",
    a1: ["Answer A", "Answer B", "Answer C", "Answer D"]},
    {q2: "Question 2",
    a2: ["Answer A", "Answer B", "Answer C", "Answer D"]},
    ...