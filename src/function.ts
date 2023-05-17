// normal function 
function addTwoNumberFunc (num1:number , num2:number): string{
    const sum = num1+num2;
    return `The Sumation of two number is: ${sum}`;
}

const result = addTwoNumberFunc(3,5)
console.log(result)


function mulTwoNumberFunc (num1:number , num2:number): number{
    const mul = num1*num2;
    return mul;
}

const result2 = mulTwoNumberFunc(3,4)
console.log(result2)

// Arrow function
const twoNumberAdd =(a:number,b:number):number => {
    return (a+b)
}

console.log(twoNumberAdd(2,4))