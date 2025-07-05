// console.log("hello world");
// function sayHello(){
//     console.log("hello from sayhello function");
// }
// sayHello();
// console.log("this is a simple js progranm");

//const { getTemplateInstallPackage } = require("create-react-app/createReactApp");

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello world");
// },5000);
// console.log("three");
// console.log("four");

// function sum(a,b){
//     console.log(a+b)
// }
// function calculator(a,b,ds){
//   ds(a,b);
// }
// calculator(5,10,sum);

// sum(5,10(a,b)=>{
//console.log(a+b)    
//});

//nested loops 
// for (let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++){
//         str+=j;
//     }
//     console.log(1,str);
// } 
// function getdata(dataid){
//     setTimeout(()=>{
//         console.log("fetching data for id:",dataid);
//     },5000);
// }
// getdata(1);
// getdata(2);
// getdata(3);

// function getdata(dataid,getnextdata){
//     setTimeout(()=>{
//     console.log("fetching data for id:",dataid);
//       if(getnextdata){
//       getnextdata();
//       } 
//     },2000);
// }

// getdata(1,()=>{
//     console.log("getting data2....")
//     getdata(2,()=>{
//         console.log("getting data3....")
//         getdata(3);
//     });
// });

// callbackhell nested  call back
//to over come this we wil use promises
// promise is eventually completion of an operation
// promise is an object that represnts the eventual completion 
// or failure of an asynchronous operation and its resulting value.
// it allows you to write asynchronous code in amore manageable way, avoiding callback hell.



//promise:syntax
//const mypromise = new Promise((resolve,reject )=>.{..})
//resolve is called when the asynchronous operation is successful 
//reject is called when the asynchronous operation fails.

// const mypromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const success = false;
//         if(success){ 
//             resolve("data fetched successfully");

//         }else{
//             reject("error fetching data");
//         }
//     },2000);
// });
// mypromise.then((data)=>{
//     console.log("promise resloved with data:",data);
// })
// .catch((error)=>{
//     console.error("promise rejected with errors:",error);
// })

// let promise=new Promise((resolve,reject)=>{
//     console.log("waste fellow");
//     if(1<0){
//         resolve(123);
//     }
//     reject("something went wrong");
// });


// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("fetching data fo id ",dataid);
//             resolve("sucess");
//         },2000);
//     });
// }
// let result =getdata(123);
// result;

// getdata(101)
// .then(result=>{
//     console.log("first fetch",result);
//     return getdata(102);
// })
// .then(result => {
//     console.log("second fetch",result);
//     return getdata(103);
// });

// const getpromise=()=>{
//     return new Promise((resolve, reject) => {
//         console.log("i am prom");
//         resolve("prom resolve");
//     });
// }

// let result =getpromise();
//     result
//     .then(data=>{
//         console.log(data);
//     });
//     result.catch(error=>{
//         console.error("erroe occured:",error)
//     });

// function asyncfun1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },2000
//         );
//     })
// }
// function asynfun2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1....");
// let p1=asyncfun1();
// p1.then((data)=>{
//     console.log("data fetched",data);
//     console.log("fetching data2...");
// let p2=asynfun2();
// p2.then((data)=>{
//     console.log("data fetched",data)
// });
// });

function getdata(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("fetching data for id",id);
            resolve(id);
        },1000);
    });
}
async function fetchdata() {
    try{
        const data1=await getdata(101);
        console.log("first fetch",data1);
        const data2=await getdata(102);
        console.log("second fetch",data2);
        const data3=await getdata(103);
        console.log("third fetch",data3);
    }catch (error){
        console.error("error occured",error)
    }
}

fetchdata();
    async function getnextdata() {
        console.log("getting data1...");
        await getdata(1);
        console.log("getting data...");
        await getdata(2);
        console.log("getting data3...");
        await getdata(3);
    }
    getnextdata();
