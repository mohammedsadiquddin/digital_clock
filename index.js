var num1=28;
var num2=93;

// console.log("The sum of ",num1,"and",num2,"is",num1+num2);

var str1="This is a string"

var marks={
    english:78,
    maths:99,
    science:87
}

// console.log(marks);

// var a=true;
// var b=false;

// console.log(a,b);


var arr=[1,2,"String",4,5];
// console.log(arr[2]);

var a=89;
var b=76;


// console.log("The value of a+b is",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a*b is ",a*b);
// console.log("The value of a/b is ",a/b);

console.log(3 && 5);
console.log(false && true);
console.log(100 && 3);
console.log(false && false);

console.log(4 || 6);
console.log(78 || 34);

function avg(a,b,c){
    return (a+b+c)/3;
}
console.log(avg(3,4,5));
console.log(avg(4,6,77));


function age(a){
    if(a>=18){
        console.log("You can vote");
    }
    else{
        console.log("You cannot vote");
    }
}

// a=window.prompt("Enter your age: ");
// age(a);

var marks=[1,2,3,4,5,6];
console.log(marks);

// for(var i=0;i<marks.length;i++){
//     console.log(marks[i])
// }

// marks.forEach(function(Element){
//     console.log(Element)
// });


let j=0;

while(j<marks.length){
    if(j==2){
        break;
    }
    console.log(marks[j]);
    j++;
}

let myArr=['java',"C++",34,null,true]
myArr.push("Python");
myArr.shift();
myArr.unshift("Javascript");
myArr.sort();
console.log(myArr);

let myDate=new Date();
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getHours(),":",myDate.getMinutes(),":",myDate.getSeconds());

let elem=document.getElementsByClassName('container');
console.log(elem);
elem[1].style.background = "violet";

elem[0].classList.add('bg-blue');
elem[0].classList.remove('bg-blue');


let tn=document.getElementsByTagName('div');
console.log(tn)
let para=document.createElement('p');
para.innerText = 'This is a paragraph';
tn[0].appendChild(para);

para1=document.createElement('i');
para1.innerText = "This paragraph is in italic";
tn[0].replaceChild(para1,para);

function clicked(){
    // window.prompt("do you want to save it yes or no");
    console.log("logged in successfully");
}

// first method by using function
// function clicking(){
//     console.log("The container has been clicked");
// }

// firstcontainer.addEventListener('click',function(){
//     console.log("clicking done!");
// });

// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse is on container");
// });
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse is out of container");
// })

let prev_html = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML = prev_html;
    console.log("mouse is up");
});


firstcontainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML = "PYTHON";
    console.log("mouse is down");
});

start =()=>{
    console.log("start this");
}
clr=setTimeout(start,3000);

// to stop this we use clearTimeout function and clearInterval function for setInterval
seconddiv =()=>{
    document.querySelectorAll('.container')[1].innerHTML = 'Stop this';
}
// clr=setInterval(seconddiv,2000)

// object to string and string to object
// obj={name:'code',length:1};
// jso=JSON.stringify(obj);
// console.log(typeof jso);
// parsed=JSON.parse({name:'code',length:1});
// console.log(typeof parsed);