const products =[
    {name:'Burger', price:250, quantity: 3},
    {name:'Cake', price:200, quantity: 3},
    {name:'Chiken_Fry', price:550, quantity: 2},    
    {name:'Pizza', price:280, quantity: 1},
    {name:'Drink', price:50, quantity: 1}
]

function totalcost(products){
    let individualCost=0;
    let totalcost=0;
        for(let product of products){
             individualCost=product.price*product.quantity
             totalcost+=individualCost;
        }
        return totalcost;
}

let Final_totalcost=totalcost(products);
console.log("Total Cost is :",Final_totalcost)