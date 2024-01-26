console.log("Перше завдання");
function canSmoke1(age){
    return (age > 18);
}
console.log(canSmoke1(16));

console.log("Друге завдання");
let canSmoke2 = function(age){
    return (age > 18);
}
console.log(canSmoke2(21));

let canSmoke3 = (age) => {
    return (age > 18);
}
console.log(canSmoke3(18));

console.log("Третє завдання");
function allowedToIn(name, age, department){
    return ((name == "Vadym" || name == "Igor") && (age > 18) && (department == "QA"));
}
console.log(allowedToIn("Kikita", 20, "QA"));
// allowedToIn("Igor", 10, "QA")
// allowedToIn("Vadym", 27, "C++ developer")
// allowedToIn("Igor", 34, "QA")
// allowedToIn("Vadym", 27, "QA")