///// DECLARE VARIABLES /////
var quizList = [
    {q: "What is the name of Robb Stark's direwolf?",
    a: ["Shaggydog", "Ghost", "Nymeria", "Grey Wind"],
    correct: "Grey Wind",
    points: 2,
    origin: "show",
    footnote: "FUN FACT: Although Sansa's direwolf, Lady, saw an untimely end in the show, the dog who played the well-behaved beast survived the ordeal and was later adopted by Sophie Turner, the actress that played Sansa Stark."},
    {q: "Whose sigil is a spear piercing the sun?",
    a: ["House Manderly", "House Martell", "House Redwine", "House Mormont"],
    correct: "House Martell",
    points: 3,
    origin: "book",
    footnote: '"A mind needs books as a sword needs a whetstone, if it is to keep its edge." — Tyrion Lannister'},
    {q: "Who is the Red Viper of Dorne?",
    a: ["Ellaria Sand", "Nymeria Sand", "Oberyn Martell", "Doran Martell"],
    correct: "Oberyn Martell",
    points: 2,
    origin: "show",
    footnote: '"What do we say to the Lord of Death? Not today." — Syrio Forel'},
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
    {q: "At the tourney at Harrenhal, who did Rhaegar crown as the Queen of Love and Beauty?",
    a: ["Elia Martell", "Lyanna Stark", "Queen Rhaella", "Cersei Lannister"],
    correct: "Lyanna Stark",
    points: 3,
    origin: "book",
    footnote: '"The things we love destroy us every time, lad. Remember that." — Commander Mormont'},
    {q: "Maester Aemon is from which house?",
    a: ["House Targaryen", "House Greyjoy", "House Stark", "House Lannister"],
    correct: "House Targaryen",
    points: 3,
    origin: "book",
    footnote: '"We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy." — Aemon Targaryen'},    
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
    {q: "Where is the House of Black and White, the training temple of the Faceless Men?",
    a: ["Volantis", "Pentos", "Braavos", "Meereen"],
    correct: "Braavos",
    points: 2,
    origin: "show",
    footnote: '"Fear cuts deeper than swords." — Arya Stark'},    
    {q: "What is the name of House Tyrell's castle?",
    a: ["Casterly Rock", "Highgarden", "Storm's End", "The Eyrie"],
    correct: "Highgarden",
    points: 2,
    origin: "show",
    footnote: '"People often claim to hunger for truth, but seldom like the taste when it\'s served up." — Tyrion Lannister'},    
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
    {q: "Who replaces Varys as Master of Whisperers after he vanishes from King's Landing?",
    a: ["Qyburn", "Pycelle", "Kevan Lannister", "Mace Tyrell"],
    correct: "Qyburn",
    points: 2,
    origin: "show",
    footnote: '"A reader lives a thousand lives before he dies. The man who never reads lives only one." — Jojen Reed'},    
    {q: "Who is the blacksmith at Castle Black?",
    a: ["Mikken", "Bowen Marsh", "Donal Noye", "Allister Thorne"],
    correct: "Donal Noye",
    points: 3,
    origin: "book",
    footnote: '"When the snows fall and the white winds blow, the lone wolf dies but the pack survives." — Ned Stark'},    
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
    footnote: "FUN FACT: When Emilia Clarke first met her on-screen husband Jason Momoa, he screamed 'WIFEY!', ran across the hall, and rugby-tackled her to the floor."},
    {q: "Who is Lady Stoneheart?",
    a: ["Cersei Lannister", "Catelyn Stark", "Melisandre", "Brienne of Tarth"],
    correct: "Catelyn Stark",
    points: 3,
    origin: "book",
    footnote: '"Winter is coming."'}];
// Holding containers to track answers, points, progress, and time.
var answerList = [];
var quizProgress = 0;
var pointsTotal = 0;
var pointsPossible = 48;
var timeSec = 120;
var scoreHist = [];
// Create pointers.
var scoreBoard = document.getElementById("scoreboard");
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
var h3Res = document.getElementById("score-saved");
var aTag = document.getElementById("vm-meaning");
var inputLabel = document.getElementById("input-label");
var inputField = document.getElementById("input-field");
var inputButton = document.getElementById("input-button");
var scoreCard = document.getElementById("score-card");

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
aTag = document.createElement("a");
h3Res = document.createElement("h3");
scoreCard = document.createElement("ul");
inputLabel = document.createElement("label");
inputField = document.createElement("input");
inputButton = document.createElement("button");
// Assign attributes to elements.
h1Tag.setAttribute("id", "question-text");
b1Tag.setAttribute("id", "answer1");
b2Tag.setAttribute("id", "answer2");
b3Tag.setAttribute("id", "answer3");
b4Tag.setAttribute("id", "answer4");
h2Tag.setAttribute("id", "footnote");
h1Res.setAttribute("id", "game-over");
h2Res.setAttribute("id", "percentage");
h3Res.setAttribute("id", "score-saved");
aTag.setAttribute("id", "vm-meaning");
aTag.setAttribute("href", "https://awoiaf.westeros.org/index.php/Valar_morghulis");
inputLabel.setAttribute("id", "input-label");
inputField.setAttribute("id", "input-field");
inputButton.setAttribute("id", "input-button");
scoreCard.setAttribute("id", "score-card");

///// FUNCTIONS /////
// Countdown timer | game time-out.
function countDownTimer() {
    var timer = setInterval(function() {
        timeSec--;
        if (timeSec > 69) {
            timerTag.textContent = " 1:" + (timeSec - 60);
        } else if (timeSec > 59) {
            timerTag.textContent = " 1:0" + (timeSec - 60);
        } else if (timeSec > 9) {
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
// Button behaviors.
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
    console.log(scoreHist);
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
// Clear game board.
function endGame() {
        // Error message| Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
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
    if (((pointsTotal/pointsPossible) * 100) >= 50) {
        h1Res.textContent = "The Throne Is Yours";
    } else {
        h1Res.appendChild(aTag);
        aTag.textContent = "Valar Morghulis";
    }
    divA.appendChild(h2Res);
    h2Res.textContent = "Score: " + Math.round(((pointsTotal/pointsPossible)) * 100) + "%";
    retrieveFromStorage();
    divF.appendChild(inputLabel).textContent = "Enter name: ";
    divF.appendChild(inputField);
    divF.appendChild(inputButton). textContent = "Submit";
    
}

// Log name and score to local storage.
function saveResults() {
    divF.removeChild(inputLabel);
    divF.removeChild(inputField);
    divF.removeChild(inputButton);
    divF.appendChild(h3Res);
    writeToStorage();
    h3Res.textContent = "Your score has been saved!";
}
// Record player data.
function writeToStorage() {
    var player = {name: inputField.value, score: Math.round(((pointsTotal/pointsPossible)) * 100)};
    scoreHist.push(player);
    localStorage.setItem("scores", JSON.stringify(scoreHist));
}
// Access player history.
function retrieveFromStorage() {
    if (localStorage === "") {
        return;
    } else {
        scoreHist = JSON.parse(localStorage.getItem("scores")) || [];
    }
}
// Display scoreboard history on screen.
function displayScoreboard() {
    h1Res.removeChild(aTag);
    divA.removeChild(h2Res);
    divF.removeChild(h3Res);
    divA.appendChild(scoreCard);
    // retrieveFromStorage();
    for (var i = 0; i < scoreHist.length; i++) {
        var player = document.createElement("li");
        scoreCard.appendChild(player);
        player.textContent = scoreHist[i].name + " - " + scoreHist[i].score +"%";
    }
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
// Save quiz results & scoreboard.
inputButton.addEventListener("click", saveResults);
scoreBoard.addEventListener("click", displayScoreboard); 