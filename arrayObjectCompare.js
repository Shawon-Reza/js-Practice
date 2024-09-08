const mobiles = [
    { name: 'samsung', prie: 25248, camera: '12mp' },
    { name: 'oppp', prie: 225248, camera: '12mp' },
    { name: 'reza', prie: 7552248, camera: '12mp' },
    { name: 'vivo', prie: 5248, camera: '12mp' }
]

function compareprice(mobiles) {
    let min = mobiles[0];
    for (let mobile of mobiles) {
           if(min.prie>mobile.prie){
            min=mobile;
           }
    }
    return min
}

let maxprice = compareprice(mobiles);
console.log(maxprice)
