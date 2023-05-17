const shopObj :{
    name:string;
   readonly location:string;
    isProfit:boolean;
    price?:number

} ={
    name:"ABC store",
    location:"Dhaka",
    isProfit:true,
    price: 100
}

shopObj.price = 500;
console.log(shopObj)

