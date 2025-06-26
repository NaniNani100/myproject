document.title="Dom in javascript";
document.getElementById("header").innerHTML="hello world";
document.getElementById("para").style.color="blue";
document.getElementById("para").style.fontSize="30px";
document.getElementById("mr").style.color="red";
document.body.style.backgroundColor="yellow";
let ll=document.getElementsByClassName("cs");
//document.getElementsByTagName("h2")[2].style.color="red";
//document.getElementsByClassName("cls")[0].style.color="red";
//document.getElementsByClassName("cls").style.fontSize="50px";
ll[0].style.color="red";
ll[1].style.color="blue";
ll[2].style.color="green";
ll[3].style.color="yellow";

document.querySelector(".d").style.color="pink";

let d=document.querySelectorAll(".c");
d[0].style.color="red";
d[1].style.color="blue";
d[2].style.color="green";
d[3].style.color="orange";

function changebackground(){
    document.body.style.backgroundColor="brown"
}

//alert("background color changed to red" );

// function changebackground(){
//     if(document.body.style.backgroundColor ==="red")
//     {document.body.style.backgroundColor = "blue";
//     }
//     else{
        
//         document.body.style.backgroundColor = "red";
//     }
// }
function changebackground(){
    document.body.style.backgroundColor=
    document.body.style.backgroundColor==="blue"?"red" : "blue";
}
function changetext(){
    document.getElementById("clg").innerHTML="MLRD";
    document.getElementById("clg").style.backgroundColor="black";
    document.getElementById("clg").style.color="white";
    document.getElementById("clg").style.fontSize="60px";
    document.getElementById("clg").style.textAlign="center";
    
}

