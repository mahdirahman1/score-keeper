var btn1 = document.querySelector("button")
var btn2 = document.querySelectorAll("button")[1];
var btnreset = document.querySelectorAll("button")[2];
var input = document.querySelector("input");
var body = document.getElementsByTagName("body")[0];
var scoreCard1 = document.querySelectorAll("h1")[1];
var scoreCard2 = document.querySelectorAll("h1")[2];
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;



btn1.addEventListener("click", function(){
    if(!gameOver){
        p1score += 1;
        if(p1score === winningScore){
            document.getElementById("p1").classList.add("green");
            scoreCard1.style.background = "#c90a2a";
            gameOver = true;
        }
        document.getElementById("p1").textContent = p1score;
    }
    
});

btn2.addEventListener("click", function(){
    if(!gameOver){
        p2score += 1;
        if(p2score === winningScore){
            document.getElementById("p2").classList.add("green");
            scoreCard2.style.background = "#c90a2a";
            gameOver = true;
        }
        document.getElementById("p2").textContent = p2score;
    }
});

function reset() {
    p1score = 0;
    p2score = 0;
    document.getElementById("p1").textContent = p1score;
    document.getElementById("p2").textContent = p2score;
    document.getElementById("p1").classList.remove("green");
    document.getElementById("p2").classList.remove("green");
    scoreCard1.style.background = "black";
    scoreCard2.style.background = "black";
    gameOver = false;
}

btnreset.addEventListener("click", reset);

input.addEventListener("change", function(){
    winningScore = Number(input.value);
    reset();
})