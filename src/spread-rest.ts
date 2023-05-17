// spread operator
const Movies: string[] = ["Iron Man", "Thor", "Doctor Strange"]
const Hero: string[] = ["Hulk", "IceMan", "Flash"]

Movies.push(...Hero) //spread operator

console.log(Movies)

// rest parameter
const numberCount = (...num:number[]):number =>{
    let sum:number = 0;
    num.map(n =>{
        sum = sum+n;
    })

    return sum
}

const newResult = numberCount(1,2,3,4,5,6)
console.log(newResult)