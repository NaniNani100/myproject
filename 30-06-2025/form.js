document.title="form in js";
let a=document.createElement("h1");
a.textContent="PERSONAL INFORMATION";
ln.appendChild(a);
let f=document.createElement("label");
let d=document.createElement("input");
f.textContent="Enter your Name:  ";
d.type="text";
d.placeholder="enter ur name";
ln.appendChild(f);
ln.appendChild(document.createElement("br"));
ln.appendChild(d);

ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));
let f1=document.createElement("label");
let d1=document.createElement("input");
f1.textContent="enter ur email:";
d1.type="email";
d1.placeholder="enter ur email:  ";
ln.appendChild(f1);
ln.appendChild(document.createElement("br"));
ln.appendChild(d1);

ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));
let f2=document.createElement("label");

let d2=document.createElement("input");
f2.textContent="phone Number:  ";
d2.type="text";
d2.placeholder="enter ur number"
ln.appendChild(f2);
ln.appendChild(document.createElement("br"));
ln.appendChild(d2);

ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));
let f3=document.createElement("label");
let d3=document.createElement("input");
f3.textContent="Enter your password:  ";
d3.type="text";
d3.placeholder="enter password";
ln.appendChild(f3);
ln.appendChild(document.createElement("br"));
ln.appendChild(d3);
ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));

let f6=document.createElement("label");
f6.textContent="Gender :  ";


ln.appendChild(f6);
let f7=document.createElement("label");
let d7=document.createElement("input");
f7.textContent="male";
d7.name="name";
d7.type="radio";
ln.appendChild(f7);
ln.appendChild(d7);
let f8=document.createElement("label");
let d8=document.createElement("input");
f8.textContent="female";
d8.name="name";
d8.type="radio";
ln.appendChild(f8);
ln.appendChild(d8);
ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));


let f9=document.createElement("label");
f9.textContent="select ur country:  ";
let d9=document.createElement("select");
let n=document.createElement("option");
n.value="india";
n.textContent="options";
d9.appendChild(n);

let n1=document.createElement("option");
n1.value="india";
n1.textContent="INDIA";
d9.appendChild(n1);
let n2=document.createElement("option");
n2.value="india";
n2.textContent="USA";
d9.appendChild(n2);
let n3=document.createElement("option");
n3.value="india";
n3.textContent="CANADA";
d9.appendChild(n3);



ln.appendChild(f9);
ln.appendChild(document.createElement("br"));
ln.appendChild(d9);

ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));

let f5=document.createElement("label");
let d5=document.createElement("textarea");
f5.textContent="Address:  ";
d5.type="text";
d5.placeholder="address";
ln.appendChild(f5);
ln.appendChild(document.createElement("br"));
ln.appendChild(d5);
ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));
ln.appendChild(document.createElement("br"));

let g=document.createElement("button");
g.textContent="submit";
ln.appendChild(g);


       