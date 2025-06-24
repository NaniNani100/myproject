let age=18;
if (age < 18){
    console.log("ur a minor");

}
else if(age>=18 && age <65){
    console.log("ur an adult");
}
else{
    console.log("ur a senior citizen");
}
console.log("\n")

//switch stmt
let day=3;
switch(day){
    case 1:
   console.log("monday");
   break;
   case 2:
   console.log("tuesday");
   break;
case 3:
   console.log("wed");
   break;

case 4:
   console.log("thu");
   break;

case 5:
   console.log("sat");
   break;
   case 6:
   console.log("sun");
   break;
   default:
    console.log("invalid day")
}
 

//loops
console.log('\n');
for(let i=0; i<5;i++){
    console.log(i)
}
console.log('\n');
 
let j=0;
while(j<5){
    console.log(j);
    j++;
}
console.log('\n');

let k=0;
do{
    console.log(k);
    k++;
}while(k<5);