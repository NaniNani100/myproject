let aish=document.createElement("p");
aish.textContent="i'm chitti";
//aish.innerHTML="memory 1 terabyte";
//aish.style.color="red";
//aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);

setTimeout(() => {
    let re=document.getElementsByClassName("li")[3];
    if (re){
        re.remove();
    }
},2000);

// new heading
let newheading=document.createElement("h2");
newheading.innerHTML="This is a new heading added by js!";
newheading.style.color="red";
newheading.style.fontSize="30px";  // set the font size
document.body.appendChild(newheading);  // append the new heading

setTimeout(() =>{

let newText =document.createElement("p");
newText.textContent="this is added after 3 sec";
newText.style.color="purple";
document.body.appendChild(newText);
},3000);


//apend text to tag
let tagtext =document.createElement("p");
tagtext.textContent="This text is appended to tag!";
tagtext.style.color="blue";
document.getElementById("vasi").appendChild(tagtext);

//create a list,add items, and remove
let mylist=document.createElement("ul");
for (let i=1;i<=3;i++){
let listitems = document.createElement("li");
listitems.textContent=`item${i}`;
listitems.style.color="purple";
listitems.style.fontSize="18px";

mylist.appendChild(listitems);

}
document.body.appendChild(mylist);