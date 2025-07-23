var num= document.getElementById("guess") 
var result=document.getElementById("result")
var randomnum=Math.floor(Math.random()*10)+1
var totalscore=10
var score=document.getElementById("score")
function random(){
    var enterednumber=num.value
 if (randomnum==enterednumber){
    console.log("right")
    result.textContent="right"
    alert("you won")
 }
 else{
   totalscore=totalscore-1
score.textContent=totalscore
    console.log("wrong")
 }
}