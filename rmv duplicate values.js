let array = ['rexa', 'Rexa', 'Shawong', 'ok','ok'];
let array2=[...new Set(array)];
console.log(array2)
console.log('----------------------')

let array3 = ['rexa', 'Rexa', 'Shawong', 'ok','ok'];
let array4= [...new Set(array3.map(iteam=>iteam.toUpperCase()))];
console.log(array4)

