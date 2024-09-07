let array = ['rexa', 'Rexa', 'Shawong', 'ok','ok'];
console.log(array);

let array2= new Set(array);
array2.add('Sojib')
console.log(array2);

let array3=[...array2];      //conver to array
console.log(array3);


let number = 155869778892451399421;
let newNumber = [...new Set(number.toString())].join('');
console.log(newNumber);
