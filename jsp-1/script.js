//var a=10
//var b=20
//console.log(a+b)
/*var a=10
var b=a++
console.log(a)*/
/*var a=20
var b=++a
console.log(b)*/
/*function samsung() {
   console.log("this is samsung")
}
samsung()
function oppo() {
   console.log("this is oppo")
}
oppo()*/
/*var actor="kamal"
console.log("favourite:"+actor)*/
/*var factor="kamal"
function actors(){
    console.log("favourite:"+factor)
}
actors()*/
/*function area(l,b)
{
   var a=l*b
   console.log("area="+a)
}
var length=10
var bredth=20
area(10,20)*/

/*function add(a,b){
   return a+b
}
c=add(20,30)
console.log(c)*/

/*var para=document.getElementById("message")
console.log(para.textContent)

function change(){
   para.textContent="bye"
}*/
var num1=document.getElementById("num1")
var num2=document.getElementById("num2")
var result=document.getElementById("result")

function Addition(){
var num1value=Number(num1.value)
var num2value=Number(num2.value)
var sum=num1value+num2value
   result.textContent=sum
}