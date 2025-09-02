//SEGUNDA ATIVIDADE--02

let items = [
  { name: "bike",  price: 100 },
  { name: "car",   price: 200 },
  { name: "bus",   price: 300 },
  { name: "scooter", price: 150 }
];
items.push({ name: "train", price: 400 });
items.unshift({ name: "skateboard", price: 50 });
let bike =items.find(item => item.name === "bike");
if (bike) {
 bike.price = 120;}
items.pop();
items.shift();
items.findIndex(item => item.name === 'bus');
items.find(item => item.name === "car");
let maior150 =items.filter(item => item.price > 150);
let nomes =items.map(item => item.name);
let preço =items.map(item => item.price);
items.forEach(element => console.log(element));
let maior250 =items.some(item => item.price > 250);
let maior50 =items.every(n=> n.price > 50)

//console.log(items);
//console.log(bike);
//console.log(maior150);
//console.log(nomes);
//console.log(preço);
//console.log(maior250);
//console.log(maior50);