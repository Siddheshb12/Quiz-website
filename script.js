const questions = [{
    'question': 'Which of the following is a markup language?',
    'a': "HTML",
    'b': 'CSS',
    'c': 'javascript',
    'd': 'php',
    'correct_answer': 'a'
},
{
    'question': "The Harvard architecture for micro-controllers added which additional bus?",
    'a': "Address",
    'b': "Data",
    'c': "Control",
    'd': "Instruction",
    "correct_answer": "d"
},
{
    "question": "What does CPU stand for?",
    'a': "Central Process Unit",
    'b': "Computer Personal Unit",
    'c': "Central Processor Unit",
    'd': "Central Processing Unit",
    "correct_answer": "d"
},
{
    "question": "HTML is what type of language?",
    'a': "Macro Language",
    'b': "Programming Language",
    'c': "Scripting Language",
    'd': "Markup Language",
    "correct_answer": "d"
},
{
    "question": "The programming language &quot;Python&quot; is based off a modified version of &quot;JavaScript&quot;.",
    'a': "True",
    'b': "False",
    "correct_answer": "b"
},
{
    "question": "Which of these programming languages is a low-level language?",
    'a': "Python",
    'b': "C#",
    'c': "Pascal",
    'd': "Assembly",
    "correct_answer": "d"
},

{
    "question": "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    'a': "True",
    'b': "False",
    "correct_answer": "b"
},
{
    "question": "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    'a': "PC-9801",
    'b': "Xmillennium ",
    'c': "MSX",
    'd': "FM-7",
    "correct_answer": "d"
},
{
    "question": ".at is the top-level domain for what country?",
    'a': "Argentina",
    'b': "Australia",
    'c': "Angola",
    'd': "Austria",
    "correct_answer": "d"
},
{
    "question": "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    'a': "1999",
    'b': "2002",
    'c': "2008",
    'd': "2005",
    "correct_answer": "d"
},
{
    "question": "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    'a': "Cherry MX Black",
    'b': "Cherry MX Red",
    'c': "Cherry MX Brown",
    'd': "Cherry MX Blue",
    "correct_answer": "d"
}

]



let index = 0;
let total = questions.length;
let correct = 0, wrong = 0;
const queBox = document.getElementById("queBox");


const options = document.querySelectorAll(".options");



const loadQ = () => {
    if(index === total-1){
        document.getElementById("next").innerHTML = "Submit";
    }
    if(index===total){
        return endQuiz();
    }
    reset();
    let data = questions[index];
    queBox.innerHTML = `${index + 1}) ${data.question}`
    options[0].nextElementSibling.innerHTML = data.a;
    options[1].nextElementSibling.innerHTML = data.b;
    options[2].nextElementSibling.innerHTML = (data.c == undefined)? "" : data.c;
    options[3].nextElementSibling.innerHTML = (data.d == undefined)? "" : data.d;
}




const next = () => {
   
    let data = questions[index];

    const ans = getanswer();
    if(ans===data.correct_answer){
        correct++;
    }
    else{
        wrong++;
    }

    index++;
    loadQ();
}

const prev = () => {

    if(index === total-1){
        document.getElementById("next").innerHTML = "Next";
    }

    if(index > 0){
        index--;
    }
    correct--;
    wrong--;
    
    loadQ();
}

const getanswer = ()=>{
    let answer;
    options.forEach(element => {
        if(element.checked){
           answer =  element.value;
        }
    });
    return answer;
}

const reset = ()=>{
    options.forEach(element => {
        element.checked = false;
    });
}

const endQuiz = ()=>{
document.getElementById("box").innerHTML = `
<div style="text-align: center">
<h3>Thank You For Playing The Quiz</h3>
${correct} / ${total} are correct.
</div>
`
}



loadQ();