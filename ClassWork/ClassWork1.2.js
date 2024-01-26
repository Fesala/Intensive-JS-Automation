// OPERATORS
let name1 = "Firda";
let age1 = 18;
let weight1 = 100;

// ++ , --
age1++
age--

// + , - , * , / , %
let result1 = age1 + weight1

// %
10 / 2 === 5
11 % 2 === 1
12 % 2 === 0
13 % 2 === 1
13 % 3 === 1
14 % 4 === 2

// += , -= , *= , /=
(age1 = age1 + 10) === (age1 += 10)

// == , != , === , !== , > , >- , < , <=

// if , if else , if if else
if(true){
    console.log("inside if")
}else{
    console.log("inside else block")
}

if(age1 > 18){
    console.log("inside if")
}else{
    console.log("inside else block")
}

if(age1){ // У такому впадку у консолі виведеться inside if тільки якщо age не undefined і не null
    console.log("inside if")
}else{
    console.log("inside else block")
}

if(age1){ 
    console.log("inside if")
}else if(age1 > 100){ 
    console.log("...")
}else{
    console.log("inside else block")
}

function canIDrinkAlcohol(age1){
    if(age1 < 18){ 
        return "Ти замалий щоб пити"
    }else if(age1 > 100){ 
        return "Тобі застарий! Ще помреш!"
    }else{
        return "Тобі вже можна все!"
    }
}

function canIDrinkAlcohol(age1){
    if(age1 < 18){ 
        return "Ти замалий щоб пити"
    }
    if(age1 >= 100){ 
        return "Тобі застарий! Ще помреш!"
    }
    return "Тобі вже можна все!";
}

// && , ||
function canIDrinkAlcohol(age1){
    if(age1 >= 18 && age1 < 100){ 
        return "Тобі вже можна все!"
    }else{ 
        return "Тобі не можна пити!"
    }
}

function canIDrinkAlcohol(age1){
    if(age1 < 18 || age1 >= 100){ 
        return "Тобі не можна пити!"
    }else{ 
        return "Тобі вже можна все!"
    }
}

function canIDrinkAlcohol(age1){
    if(age1 < 18 || name >= 100 || role == 'admin'){ 
        return "..."
    }else{ 
        return "???"
    }
}

function canIDrinkAlcohol(age1){
    if(age1 < 18 || (name >= 100 || role == 'admin')){ 
        return "..."
    }else{ 
        return "???"
    }
}

// oversimplification
2+(2*2)

// switch/case

// Тернарні оператори
let role1;
if(age1 > 18){
    role1 = "QA";
}else {
    role1 = "Student";
}
let role2 = age1 > 18 ? "QA" : "Student"


// FUNCTIONS
console.log() // По круглим дужкам легко визначити, що це функції
console.log // Круглих дужок немає - а значить це посилання на функцію

// hoisting
function myFunctions1(){
    console.log(age1 + 10);
}
myFunctions1()

myFunctions2()
function myFunctions2(){
    console.log(age1 + 10);
}

age2 = 10;
var age2;

var age3;
age3 = 10;

//
function myFunctions3(arg){
    console.log(arg);
}
myFunctions3("Hello");
myFunctions3(145256);

function greeting(arg){
    console.log(`Привіт ${arg}!!!`);
}
greeting("Kikita");
greeting("Nazar4ik");

function greeting2(name2){
    if(name2 === "Anna"){
        console.log(`Тобі сюди не можна!`);
        return
    }
    console.log(`Привіт ${name2}!!!`);
}
greeting2("Kikita");
greeting2("Nazar4ik");
greeting2("Anna");

function greeting3(name3){
    if(name3 === "Anna"){
        console.log(`Тобі сюди не можна!`);
        return this
    }
    console.log(`Привіт ${name3}!!!`);
}
greeting3("Kikita");
greeting3("Nazar4ik");
greeting3("Anna");

function greeting4(name4="Kikita", age4, role4){
    if(name4 === "Anna"){
        console.log(`Тобі сюди не можна!`);
        return this
    }
    console.log(`Привіт ${name4}!!!`);
}
greeting4();
greeting4("Nazar4ik");
greeting4("Anna"); 

let args = ["Kikita", 12, "QA"]

function greeting5(...args){
    if(name === "Anna"){
        console.log(`Тобі сюди не можна!`);
        return this
    }
    console.log(`Привіт ${name}!!!`);
}
console.log(args)
console.log(...args)

// Способи задання функції
function greeting6(name6="Kikita", age6, role6){
    if(name6 === "Anna"){
        console.log(`Тобі сюди не можна!`);
        return
    }
    console.log(`Привіт ${name6}!!!`);
}
greeting6();
greeting6("Nazar4ik");
greeting6("Anna"); 

let call8 = function(name8="Kikita", age8, role8){ // Це анонімна функція
    if(name === "Anna"){
        console.log(`Тобі сюди не можна!`);
        return
    }
    console.log(`Привіт ${name}!!!`);
}
call8();
call8("Nazar4ik");
call8("Anna"); 

let call7 = (name7="Kikita", age7, role7) => { 
    if(name === "Anna"){
        console.log(`Тобі сюди не можна!`);
        this
    }
    console.log(`Привіт ${name}!!!`);
}
call7();
call7("Nazar4ik");
call7("Anna"); 

/*// Callback functions
let call9 = (name9, callback) => { 
    console.log(`Привіт ${name9}!!!`)
    callback(name9)
}
call9("Nazar4ik", console.log);
call9("Anna"); 

let call10 = (name10, callback) => { 
    console.log(`Привіт ${name10}!!!`)
    callback(name10)
}
function printWord(word){
    console.log(word)
}
call10("Nazar4ik", printWord);
call10("Anna");*/

// Вкладені функції

