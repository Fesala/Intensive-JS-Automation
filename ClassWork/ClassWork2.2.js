// MAP
console.log("\n MAP")

let map22_1 = new Map()
// Додавання нових значень до map
console.log("\n Додавання нових значень до map")
map22_1.set("name","Vadym")
map22_1.set("age",20)
map22_1.set("status",true)
map22_1.set(12,"status")
map22_1.set(true,"what")
map22_1.set({},"what")
map22_1.set(null,"what")
map22_1.set(undefined,"what")
// Вивід map
console.log("\n Вивід map")
console.log(map22_1)
// .get - Вивід значення за ключем
console.log("\n .get - Вивід значення за ключем")
console.log(map22_1.get("name"))
// .keys - вивід масиву ключів
console.log("\n .keys - вивід масиву ключів")
console.log(map22_1.keys())
// .values - вивід масиву значень
console.log("\n .values - вивід масиву значень")
console.log(map22_1.values())
// .delete - видалення пари ключ-значення за ключем
console.log("\n .delete - видалення пари ключ-значення за ключем")
map22_1.delete('age')
console.log(map22_1)
console.log(map22_1.keys())
// Створення map зі значеннями
console.log("\n Створення map зі значеннями")
let map22_2 = new Map([
    ["name","Vadym"],
    ["age",20],
    ["status",true]
])
console.log(map22_2)
console.log(map22_2.keys())
console.log(map22_2.values())

// SET
console.log("\n SET")

let set22_3 = new Set()
// Додавання нових значень до set
console.log("\n Додавання нових значень до set")
set22_3.add('Vadym')
set22_3.add('Ilya')
// Вивід set
console.log("\n Вивід set")
console.log(set22_3)
// set "захищає" від повторів
console.log("\n set 'захищає' від повторів")
console.log(set22_3)
set22_3.add('Vadym')
console.log(set22_3)

// CYCLE
console.log("\n CYCLE")

let i22_4 = 0
let i22_6 = 0
// while
console.log("\n while")
while(false){
    console.log("In while")
    i22_4++
}

while(i22_6 < 3){
    console.log("Hello")
    i22_6++
}

let i22_5 = 0
let i22_7 = 0
// do while
console.log("\n do while")
do{
    console.log("In do while")
    i22_5++
}while(false)

do{
    console.log("Hello")
    i22_7++
}while(i22_7 < 3)

// for
console.log("\n for")
for(let i = 0; i < 5; i++){
    console.log(i)
}

console.log("")
for(let i = 5; i > 0; i--){
    console.log(i)
}

// for "під капотом"
console.log('\n for "під капотом"')
let i22_9 = 0;
let func22_8 = function(i){
    if(i < 3){
        console.log("In function")
        i++
        func22_8(i)
    }
}
func22_8(i22_9)

// Навіщо потрібні цикли
console.log('\n Навіщо потрібні цикли')
let arr22_10 = [1,2,3,4,5,6]
console.log(arr22_10[0])
console.log(arr22_10[1])
console.log(arr22_10[2])
console.log(arr22_10[3])
console.log(arr22_10[4])
console.log(arr22_10[5])

console.log("")
for(let i = 0; i < arr22_10.length; i++){
    console.log(arr22_10[i])
}
console.log("")
for(let i = arr22_10.length - 1; i >= 0; i--){
    console.log(arr22_10[i])
}
console.log("")
let i22_11 = 0
while(i22_11 < arr22_10.length){
    console.log(arr22_10[i22_11])
    i22_11++
}

let i22_12 = 0
let i22_13 = 0
// break y while
console.log('\n break y while')
while(i22_12 < arr22_10.length){
    console.log(arr22_10[i22_12])
    i22_12++
    break
}

console.log("")
while(i22_13 < arr22_10.length){
    if(arr22_10[i22_13] == 3){
        break
    }
    console.log(arr22_10[i22_13])
    i22_13++
}

let i22_16 = 0
// break y for
console.log('\n break y for')
for(let i22_16 = 0; i22_16 < arr22_10.length; i22_16++){
    if(arr22_10[i22_16] == 3){
        break
    }
    console.log(arr22_10[i22_16])
}
let i22_14 = 0
// continue y while
console.log('\n continue y while')
while(i22_14 < arr22_10.length){
    if(arr22_10[i22_14] == 3){
        i22_14++
        continue
    }
    console.log(arr22_10[i22_14])
    i22_14++
}

// continue y for
console.log('\n continue y for')
for(let i22_15 = 0; i22_15 < arr22_10.length; i22_15++){
    if(arr22_10[i22_15] == 3){
        continue
    }
    console.log(arr22_10[i22_15])
}

// let ... of ...
console.log('\n let ... of ...')
for(let number of arr22_10){
    console.log(number)
}

let obj22_16 = {
    name: "Ilya",
    age: 22,
    status: false
}

// let ... in ...
console.log('\n let ... in ...')
for(let param in obj22_16){
    console.log(param)
}

console.log("")
for(let param in obj22_16){
    console.log(obj22_16[param])
}

let arr22_17 = [1,2,3,4,5,6]
// .forEach
console.log('\n .forEach')
for(let number of arr22_17){
    console.log(number)
}

console.log("")
arr22_17.forEach((number) => {
    console.log(number)
})

let arr22_20 = [1,-2,-3,4,-5,6]
// .filter
console.log('\n .filter')
let arr22_18 = arr22_20.filter((number) => {
    if(number % 2 == 0){
        console.log(number)
        return number
    }
})

console.log("")
let arr22_19 = arr22_20.filter((number) => {
    if(number > 0){
        console.log(number)
        return number
    }
})

console.log("")
const words22_23 = ['spray', 'elite', 'exuberant', 'destruction', 'present']
const result22_24 = words22_23.filter((word) => word.length > 6)
console.log(result22_24)

console.log("")
const words22_25 = ['spray', 'elite', 'exuberant', 'destruction', 'present']
const result22_26 = words22_25.filter((word) => {
    if(word.length > 6){
        return word
    }
})
console.log(result22_26)

// .map
console.log('\n .map')
let arr22_21 = arr22_20.map((number, index) => {
    console.log(number + ' is on index ' + index)
})

console.log("")
let arr22_22 = arr22_20.map((number, index) => {
    if(number > 0){
        console.log(number + ' is on index ' + index)
        return number
    }
})
console.log(arr22_22)
