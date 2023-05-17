type MyArray<T> = Array<T>

const number: MyArray<number>= [1,2,3,4,5]
const strings: MyArray<string> = ["a", "b", "c"]


const objects:MyArray<object> = [{
    name: "rien",
    age:30,
},
{
name :"Babul",
// age:20
}
]

console.log(number)
console.log(strings)
console.log(objects)