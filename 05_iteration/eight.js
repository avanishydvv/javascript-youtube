/************** lec 30 rest and last  **********/

// reduce method used in shoppping


const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currVal) {
// console.log(`acc:${acc} and cuuVal:${currVal}`);
    
//     return acc + currVal ;
// },0)

const myTotal = myNums.reduce( (acc,currVal) => acc+currVal, 0 )


console.log(myTotal);


const shoppingCart =[
    {
        itemName : "js Course",
        price:  3999
    },

    {
        itemName : "Mobile dev Course",
        price:  9999
    },

    {
        itemName : "Data Science Course",
        price:  24999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)


console.log(priceToPay);
