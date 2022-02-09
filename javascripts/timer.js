

window.onclick = updateClock;
let totalTime = 40;
function updateClock() {
document.getElementById('timer').innerHTML = totalTime;
if(totalTime==0){
canvas.style.display = "none";
gameOverScreen.style.display = "flex"
youLose.play()
}else{
totalTime-=1;
setTimeout("updateClock()",1000);
}
}