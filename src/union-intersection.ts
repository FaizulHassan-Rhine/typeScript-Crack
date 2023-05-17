// intersection

type Batsman = {
    name: string;
    run:number;
    
}

type Bowlers = Batsman & {
    wicket:number;
    maiden: number;
  
}

const allPlayers: Bowlers ={
    name:"Virat",
    run: 10000,
    wicket:40,
    maiden:3
    
}
console.log(allPlayers)


// Union

type SetOne ={
    red:string;
    yellow:string;
}

type SetTwo={
    green:string;
    blue:string;
}

const Allset:SetOne|SetTwo = {
red:"wow",
yellow:"great",
green:"nice"
}

console.log(Allset)