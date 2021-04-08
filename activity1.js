score=0;
function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML="Score : " + score;
}

function nextPage()
{
window.location="index.html"
}
function saveScore()
{
    localStorage.setItem("score",score);
}