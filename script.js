// options 1 & 2
const choices = document.getElementsByClassName("choices")[0];

const opt1 = document.getElementsByClassName("x")[0];
const opt2 = document.getElementsByClassName("y")[0];

// continue
const container = document.createElement("div");
container.className = "continue";

const button = document.createElement("button");
button.className = "z";
button.textContent = "Continue";
container.appendChild(button);

const opt3 = button;

// display info
const qnum = document.getElementsByClassName("qnum")[0];
const question = document.getElementsByClassName("q")[0];

//reaction img & contianer
var display = document.getElementsByClassName("reaction")[0];
var img = document.getElementById("a");

//container holding all options
var optcontainer = document.getElementsByClassName("bottom_container")[0];

// questions answered thus far
var i = 0;

// store question answers
var answers = "";

opt1.addEventListener("click", (e) => {
    firstSet(0);
});

opt2.addEventListener("click", (e) => {
    firstSet(1);
});

opt3.addEventListener("click", (e) => {
    createChoices();
    loadQ1();
})

// answers

function firstSet(choice) {
    if (i > 0) {
        secondSet(choice);
        return;
    }
    
    if (choice == 1) {
        playAudio("./angry.mp3")

        img.src = "ciscomad.png"
        
        display.style.opacity = 1;

        optcontainer.replaceChildren();

        question.textContent = "TRY AGAIN!!!!!! wrong answer.. reload this website!"
    }
    else {
        playAudio("./yippee.mp3");

        img.src = "cisco.jpg"

        display.style.opacity = 1;        
        
        question.textContent = "yayyyyy"

        createContinue();
    }

    i++;
}

function secondSet(choice) {
    if (i > 9) {
        thirdSet(); 
        return;
    }

    answers += choice.toString();
    randomAudio();
    createContinue();
    addRemark();

    i++;
}

function thirdSet() {
    optcontainer.replaceChildren();

    var score = 0;
    for (var k = 0; k < answers.length; k++) {
        score += answers[answers.length - 1 - k] * (2 ** (answers.length - k - 1));
    }

    qnum.textContent = `Score: ${score}`;
    question.textContent = "Thanks for answering my questions! Please share your score with your boyfriend. 😁";
    
    img.src = "mog.jpg"
        
    display.style.opacity = 1;
}

// questions

function loadQ1() {
    if (i > 1) {
        loadQ2();
        return;
    }

    qnum.textContent = "Question 1";

    question.textContent = "Where would you want to eat?";

    opt1.textContent = "Cheesecake Factory";
    opt2.textContent = "Noches de Colombia";
}


function loadQ2() {
    if (i > 2) {
        loadQ3();
        return;
    }

    qnum.textContent = "Question 2";

    question.textContent = "What movie would you want to watch?";

    opt1.textContent = "Princess & The Frog";
    opt2.textContent = "Lady and the Tramp";
}

function loadQ3() {
    if (i > 3) {
        loadQ4();
        return;
    }

    qnum.textContent = "Question 3";

    question.textContent = "What generic gift do you want?";

    opt1.textContent = "Flowers";
    opt2.textContent = "Box of chocolates";
}

function loadQ4() {
    if (i > 4) {
        loadQ5();
        return;
    }

    qnum.textContent = "Question 4";

    question.textContent = "Where do you want to go first?";

    opt1.textContent = "Thrifting";
    opt2.textContent = "Restauraunt (The one you chose earlier!)";
}

function loadQ5() {
    if (i > 5) {
        loadQ6();
        return;
    }

    qnum.textContent = "Question 5";

    question.textContent = "Who drives?";

    opt1.textContent = "You (josh)";
    opt2.textContent = "Me (Not josh)";
}

function loadQ6() {
    if (i > 6) {
        loadQ7();
        return;
    }

    qnum.textContent = "Question 6";

    question.textContent = "Where after?";

    opt1.textContent = "Icecream (then home)";
    opt2.textContent = "Home";
}

function loadQ7() {
    if (i > 7) {
        loadQ8();
        return;
    }

    qnum.textContent = "Question 7";

    question.textContent = "How should we match our outfits?";

    opt1.textContent = "Full Red";
    opt2.textContent = "Red & White";
}

function loadQ8() {
    if (i > 8) {
        loadQ9();
        return;
    }

    qnum.textContent = "Question 8";

    question.textContent = "Are you mad at me rn?";

    opt1.textContent = "Yes but I will forgive you 😁";
    opt2.textContent = "No 😁";
}

function loadQ9() {
    if (i > 9) {
        loadQ10();
        return;
    }

    qnum.textContent = "Question 9";

    question.textContent = "Almost done! Are you ready?";

    opt1.textContent = "Yes";
    opt2.textContent = "No";
}

function loadQ10() {
    qnum.textContent = "Question 10";

    question.textContent = "Will you be my valentine?";

    opt1.textContent = "Yes";
    opt2.textContent = "Yes";
}

// nonunique dom elements/effects

function playAudio(fileName) {
    var audio = new Audio(fileName);
    audio.play();
    }
    
    function createContinue() {
        choices.replaceChildren();
    
        optcontainer.appendChild(container);
    }
    
    function createChoices() {
        display.style.opacity = 0;
    
        optcontainer.replaceChildren();
    
        optcontainer.appendChild(choices);
        choices.appendChild(opt1);
        choices.appendChild(opt2);
    }

function randomAudio() {
    var n = Math.floor(Math.random() * 10);
    var file = "";
    console.log(n);

    switch(n) {
        case 0:
            file = "./yippee.mp3"
            break;
        case 1:
            file = "./thinking.mp3";
            break;
        case 2:
            file = "./woah.mp3";
            break;
        case 3:
            file = "./laugh.mp3";
            break;
        case 4: 
            file = "./correct.mp3";
            break;
        case 5: 
            file = "./yesyes.mp3";
            break;
        case 6: 
            file = "./imposter.mp3";
            break;
        case 7: 
            file = "./duolingo1.mp3";
            break;
        case 8:
            file = "./duolingo2.mp3";
            break;
        case 9:
            file = "./glee.mp3";
            break;
    }

    playAudio(file);
}

function addRemark() {
    var n = Math.floor(Math.random() * 10);
    var comment = "";
    console.log(n);

    switch(n) {
        case 0:
            comment = "Oh, i see."
            break;
        case 1:
            comment = "interesting...";
            break;
        case 2:
            comment = "good answah good answah";
            break;
        case 3:
            comment = "didn't expect that one";
            break;
        case 4: 
            comment = "i understand it now";
            break;
        case 5:
            comment = "cool, okay."
            break;
        case 6:
            comment = "definitely expected that answer lmao"
            break;
        case 7:
            comment = "predictable."
            break;
        case 8:
            comment = "exotic choice."
            break;
        case 9:
            comment = "i wanted that one too!"
            break;
    }

    question.textContent = comment;
}
