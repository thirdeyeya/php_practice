let apple = {
    name: 'りんご',
　　color: 'red',
　　size: 28.0,
　　weight: 400
};

let orange = {
    name: 'みかん',
    color: 'orange',
    size: 5.5,
    weight: 130
};

let grape = {
    name: 'ぶどう',
    color: 'purple',
    size: 13.5,
    weight: 295
};

let fruits = [apple, orange, grape];

let amount_weight = 0;

for(let i = 0; i < fruits.length; i++){
    amount_weight += fruits[i].weight
}

console.log(amount_weight);

