// type assertion

const GuessSomeThing:unknown = 23.567;
const result3 = GuessSomeThing as number;
console.log(result3.toFixed(2))


const chooseNumber = (num:number|string):number|string =>{
    if(num === 'string'){
        return "hello";
    }
    
   return num
}

console.log(chooseNumber("7"))

