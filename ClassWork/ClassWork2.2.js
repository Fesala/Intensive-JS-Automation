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
