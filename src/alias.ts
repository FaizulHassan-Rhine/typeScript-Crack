type CountryType = string|number;
const myCountry:CountryType = 10;

type CountryInfo = {
    name:string;
    rank:number;
    continent: string
}

const Country:CountryInfo ={
    name: "Argentina",
    rank: 1,
    continent: "America"
}
const Country2: CountryInfo ={
    name: "China",
    rank: 2,
    continent: "Asia"
}
const Country3: CountryInfo ={
    name: "Usa",
    rank: 3,
    continent: "America"
}
const Country4: CountryInfo ={
    name: "Spain",
    rank: 4,
    continent: "Europe"
}
const Country5: CountryInfo ={
    name: "Germany",
    rank: 5,
    continent: "Europe"
}

console.log(Country)
console.log(Country2)
console.log(Country3)
console.log(Country4)
console.log(Country5)