
var numcount = 0;

const http = new XMLHttpRequest();
function loadQuestion(index) {
    http.open("GET", "Questions.json");
    http.onload = function () {
        const questions = JSON.parse(this.responseText);
        console.log(questions);

        var divcontainer = document.getElementsByClassName("container")[0];

        var question = `<h2 class="qustiontext">${++numcount}- ${questions[index].Q}</h2>
        <div onclick="ClickBtnChoice()" class="Choices"><button class="btncoice"  ><span class="Letter"> A </span> <span class="Question">${questions[index].awr1}</span> </button></div>
        <div onclick="ClickBtnChoice()" class="Choices"><button class="btncoice"  ><span class="Letter"> B </span> <span class="Question">${questions[index].awr2}</span> </button></div>
        <div  onclick="ClickBtnChoice()" class="Choices"><button class="btncoice" ><span class="Letter"> C </span> <span class="Question">${questions[index].awr3}</span> </button></div>
      
        `
        divcontainer.innerHTML = question;
        next.innerHTML = ''
        next.style.display = 'none'

    };
    http.send();
}
function session() {
    var getsession = sessionStorage.getItem('index');
    var question = `<h2 class="qustiontext">${++numcount}- ${questions[getsession].Q}</h2>
    <div onclick="ClickBtnChoice()" class="Choices"><button class="btncoice"  ><span class="Letter"> A </span> <span class="Question">${questions[getsession].awr1}</span> </button></div>
    <div onclick="ClickBtnChoice()" class="Choices"><button class="btncoice"  ><span class="Letter"> B </span> <span class="Question">${questions[getsession].awr2}</span> </button></div>
    <div  onclick="ClickBtnChoice()" class="Choices"><button class="btncoice" ><span class="Letter"> C </span> <span class="Question">${questions[getsession].awr3}</span> </button></div>
    `
    divcontainer.innerHTML = question;
}

var next = document.getElementsByClassName('nextbtn')[0];
loadQuestion(0);
var index = 0;
function ClickBtnChoice() {
    next.style.display = 'inline'
    next.innerHTML = 'next'
    console.log(next.innerHTML)
}
function nextqus() {
    ++index;
    sessionStorage.setItem('index', index);
    loadQuestion(index);

}