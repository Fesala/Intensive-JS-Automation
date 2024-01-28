// JS BUILT-IN FUNCTIONS FOR STRING
console.log(' JS BUILT-IN FUNCTIONS FOR STRING')
let name21_1 = "as;dga316;4()&g;ufb"
// length
console.log('\n length')
console.log(name21_1.length)
// slice()
console.log('\n slice()')
console.log(name21_1.slice(0,5))
console.log(name21_1.slice(0,name21_1.length-1))
// replace() , replaceAll()
console.log('\n replace() , replaceAll()')
console.log(name21_1.replace(";",""))
console.log(name21_1.replace(";","!"))
console.log(name21_1.replaceAll(";",""))

let name21_2 = "Name"
// toUpperCase() , toLowerCase()
console.log('\n toUpperCase() , toLowerCase()')
console.log(name21_2.toUpperCase())
console.log(name21_2.toLowerCase())
// concat()
console.log('\n concat()')
console.log(name21_2.concat("!"))
console.log(name21_2 + "!")

let name21_3 = 'id,name,age'
let name21_4 = 'name'
// split()
console.log('\n split()')
console.log(name21_3.split(","))
console.log(name21_4.split(""))
// charAt()
console.log('\n charAt()')
console.log(name21_4.charAt("0"))
console.log(name21_4.charAt("3"))

let name21_5 = '   n name e   '
// trim() , trimStart() , trimEnd()
console.log('\n trim() , trimStart() , trimEnd()')
console.log(name21_5)
console.log(name21_5.trim())
console.log(name21_5.trim() + "!")
console.log(name21_5.trimStart())
console.log(name21_5.trimStart() + "!")
console.log(name21_5.trimEnd())
console.log(name21_5.trimEnd() + "!")

// Spread operators
console.log('\n Spread operators')
console.log(...name21_4.split(''))
console.log(...name21_4)

let obj21_6 = {
    name: "Name",
    age: "50"
}
let func21_7 = function(obj21_6){
    console.log(obj21_6.name)
    console.log(obj21_6.age)
}
let func21_8 = function({name, age}){
    console.log(name)
    console.log(age)
}
let func21_9 = function(){
    let obj = {
        name: "Name",
        age: "50"
    }
    const {name, age} = obj

    console.log(name)
    console.log(age)
}
// Розкриття об'єкта
console.log("\n Розкриття об'єкта")
func21_7(obj21_6)
func21_8(obj21_6)
func21_9()

let name21_6 = '!name!'
// padStart() , padEnd()
console.log("\n padStart() , padEnd()")
console.log(name21_6.padStart(5, "a"))
console.log(name21_6.padStart(10, "a"))
console.log(name21_6.padEnd(5, "a"))
console.log(name21_6.padEnd(10, "a"))

let name21_7 = 'na!me'
// indexOf()
console.log("\n indexOf()")
console.log(name21_7.indexOf("n"))
console.log(name21_7.indexOf("!"))
console.log(name21_7.indexOf("na"))
console.log(name21_7.indexOf("me"))
console.log(name21_7.indexOf("o"))

let name21_8 = 'na!me!'
// serch()
console.log("\n serch()")
console.log(name21_8.indexOf("!"))

// JS BUILT-IN FUNCTIONS FOR NUMBERS
console.log('\n JS BUILT-IN FUNCTIONS FOR NUMBERS')

let number21_9 = 5.3
let number21_10 = 5.5
let number21_11 = 5.7
// Math.round(x) повертає значення округлене за математичними правилами
console.log("\n Math.round(x)")
console.log(Math.round(number21_9))
console.log(Math.round(number21_10))
console.log(Math.round(number21_11))

// Math.ceil(x) повертає значення округлене вверх
console.log("\n Math.ceil(x)")
console.log(Math.ceil(number21_9))
console.log(Math.ceil(number21_10))
console.log(Math.ceil(number21_11))

// Math.floor(x) повертає значення округлене вниз
console.log("\n Math.floor(x)")
console.log(Math.floor(number21_9))
console.log(Math.floor(number21_10))
console.log(Math.floor(number21_11))

// Math.trunc(x) повертає цілу частину значення
console.log("\n Math.trunc(x)")
console.log(Math.trunc(number21_9))
console.log(Math.trunc(number21_10))
console.log(Math.trunc(number21_11))

// Math.pow(x, y) повертає значення х у степені у
console.log("\n Math.pow(x, y)")
console.log(Math.pow(2, 5))
console.log(Math.pow(5, 2))

// Math.sqrt(x) повертає корінь квадратний з х
console.log("\n Math.sqrt(x)")
console.log(Math.sqrt(25))
console.log(Math.sqrt(64))

// Math.abs(x) повертає модуль значення х
console.log("\n Math.abs(x)")
console.log(Math.abs(25))
console.log(Math.abs(-64))

// Math.min() повертає найменше значення зі списку аргументів
console.log("\n Math.min()")
console.log(Math.min(25, 64, 9104835, -1, -10843.4, -1342.1324, 8094.8936))

// Math.max() повертає найменше значення зі списку аргументів
console.log("\n Math.max()")
console.log(Math.max(25, 64, 9104835, -1, -10843, -1342.1324, 8094.8936))

// Math.random() повертає випадкове число від 0 включно до 1 виключно
console.log("\n Math.random()")
console.log(Math.random())

// JS BUILT-IN FUNCTIONS FOR DATE
console.log('\n JS BUILT-IN FUNCTIONS FOR DATE')

let date21_12 = new Date()
// new Date() , .getDay() , .getFullYear() , .getMinutes() , getHours() ...
console.log("\n new Date() , .getDay() , .getFullYear() , .getMinutes() , getHours() ...")
console.log(date21_12)
console.log(date21_12.getDay())
console.log(date21_12.getFullYear())
console.log(date21_12.getMinutes())
console.log(date21_12.getHours())

// ARRAYS
console.log('\n ARRAYS')

let func21_13 = function(){}
let obj21_14 = {}
let arr21_15 = ["Vadym",4,true,func21_13,obj21_14,[],null,undefined]

// Вивід елементів масиву через вказівник
console.log("\n Вивід елементів масиву через вказівник")
console.log(arr21_15[0])
console.log(arr21_15[1])
console.log(arr21_15[2])
console.log(arr21_15[10])

// Присвоєння новим змінним значень елементів масиву через вказівник
console.log("\n Вивід елементів масиву через вказівник")
let name21_16 = arr21_15[0]
console.log(name21_16)

let arr21_16 = ["Vadym",4]
// Додавання нових і заміна існуючих елементів у масив через вказівник
console.log("\n Додавання нових і заміна існуючих елементів у масив через вказівник")
arr21_16[2] = "New value"
console.log(arr21_16)
arr21_16[0] = "Vadymka"
console.log(arr21_16)
arr21_16[0] = 4
console.log(arr21_16)

let arr21_17 = ["Vadym",4]
// Видалення елементів масиву через вказівник
console.log("\n Видалення елементів масиву через вказівник")
delete arr21_17[1]
console.log(arr21_17)

let arr21_19 = ["Vadym",4,7,'asdjk']
// Видалення елементів масиву через вказівник
console.log("\n Видалення елементів масиву через вказівник")
arr21_19.length = 2
console.log(arr21_19)
console.log(arr21_19[2])

let arr21_20 = ["Vadym",4,7,'asdjk']
// Видалення елементів масиву через присвоєння його певної частини іншому масиву
console.log("\n Видалення елементів масиву через присвоєння його певної частини іншому масиву")
let arr21_21 = arr21_20.slice(0,3)
console.log(arr21_21)
let arr21_22 = arr21_20.slice(2,3)
console.log(arr21_22)

let arr21_18 = ["Vadym",4]
// .length
console.log("\n .length")
console.log(arr21_18.length)
arr21_18.length = 3
console.log(arr21_18)
console.log(arr21_18[2])
console.log(arr21_18.length)

let arr21_23 = ["Vadym",4]
let arr21_24 = ["Vadym",4]
let arr21_25 = ["Vadym",4,false]
// .push
console.log("\n .push")
arr21_23.push(123)
console.log(arr21_23)
arr21_24.push([123, "9dfg"])
console.log(arr21_24)
arr21_25.push(...[123,354])
console.log(arr21_25)

let arr21_28 = ["Vadym",4,false]
// .unshift
console.log("\n .unshift")
arr21_28.unshift('guah')
console.log(arr21_28)
arr21_28.unshift(7654)
console.log(arr21_28)
arr21_28.unshift([123, "9dfg"])
console.log(arr21_28)

let arr21_26 = ["Vadym",4,false]
// .pop
console.log("\n .pop")
arr21_26.pop()
console.log(arr21_26)
arr21_26.pop()
console.log(arr21_26)

let arr21_27 = ["Vadym",4,false]
// .shift
console.log("\n .shift")
arr21_27.shift()
console.log(arr21_27)
arr21_27.shift()
console.log(arr21_27)

let func21_29 = function(){
    console.log("qwertyuiop")
}
let obj21_30 = {
    name: "Vadim",
    callFunction: func21_29,
    bol: false,
    arr: [1,2,3]
}
let arr21_31 = ["Vadym",4,false,func21_29,obj21_30]
console.log("\n Масив")
console.log(arr21_31)
// Виклик функції з масиву
console.log("\n Виклик функції з масиву")
// console.log(arr21_31[3])
// console.log(arr21_31[3]())
// arr21_31[3]
arr21_31[3]()
// Виклик об'єкту з масиву
console.log("\n Виклик об'єкту з масиву")
console.log(arr21_31[4])
// Виклик функції з об'єкту, який в масиві
console.log("\n Виклик функції з об'єкту, який в масиві")
// console.log(arr21_31[4].callFunction)
// console.log(arr21_31[4].callFunction())
arr21_31[4].callFunction()
// Виклик елементу з об'єкту, який в масиві
console.log("\n Виклик елементу з об'єкту, який в масиві")
console.log(arr21_31[4]["name"])
console.log(arr21_31[4].name)
// Виклик функції з об'єкту
console.log("\n Виклик функції з об'єкту")
obj21_30.callFunction()

let obj21_32 = {
    name: "Vadim",
    callFunction: func21_29,
    bol: false,
    arr: [1,2,3],
    secondObj: {
        name: 'Ilya',
        thirdObj: {
            name: 'Egor'
        }
    }
}
let arr21_33 = ["Vadym",4,false,func21_29,obj21_32]
console.log("\n Масив")
console.log(arr21_33)
// Виклик багаторівневого об'єкту з масиву
console.log("\n Виклик багаторівневого об'єкту з масиву")
console.log(arr21_33[4])

let matrix21_34 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// Матриці
console.log("\n Матриці")
console.log(matrix21_34)
console.log(matrix21_34[0])
console.log(matrix21_34[0][0])
console.log(matrix21_34[1][2])

let arr21_35 = ["Vadym",4,false,func21_29,obj21_32]
let arr21_36 = ["Vadym",4,false,func21_29,obj21_32]
// Порівняння масивів
console.log("\n Порівняння масивів")
console.log(arr21_35==arr21_36)
console.log(arr21_35===arr21_36)
console.log(arr21_35.toString()==arr21_36.toString())
console.log(arr21_35.toString()===arr21_36.toString())
