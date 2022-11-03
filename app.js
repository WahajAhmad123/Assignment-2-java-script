var total = 450 ;
var Maths= +prompt("Enter the marks of Maths","100");
var English= +prompt("Enter the marks of English","75");
var Urdu= +prompt("Enter the marks of Urdu","75");
var Physics= +prompt("Enter the marks of Physics","100");
var Computer= +prompt("Enter the marks of Computer","100");
var sumtoatal = Maths + English + Urdu + Physics + Computer;
var per = (sumtoatal/total)*100;
console.log("Maths:",Maths);
console.log("English:",English);
console.log("Urdu:",Urdu);
console.log("Physics:",Physics);
console.log("Computer:",Computer);
console.log("Total:",sumtoatal);
console.log("Percentage:",per);
if (per <=100 && per>90){
    console.log("Grade: A+");
}else if(per <=90 && per >80){
    history = prompt()
    console.log("Grade: A");
}else if(per  <=80 && per >70){
    console.log("Grade: B");
}else if(per  <=70 && per >60){
    console.log("Grade: C");
}else if(per  <=60 && per >50){
    console.log("Grade: D");
}else  {
    console.log("Fail");
}

var num = prompt("Enter the Number")

if (num!=10){
    if(num>5){
        console.log("Number is Greater than 5")
    }else {
        console.log("Number is less than 5")
    }
}else {
    console.log("Number is 10")
}