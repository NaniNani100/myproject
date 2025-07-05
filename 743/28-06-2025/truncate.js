function truncateString(string,number){
if(string.length > number){
  return string.slice(0,number)+"...";
}
else{
  return string;
}
}
let truncate=truncateString("jefds",3);
console.log(truncate)