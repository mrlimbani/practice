const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log('months==>',months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May', 'June', 'July');
// replaces 1 element at index 4
console.log('months==>',months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log('animals==>',animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log('0,2==>',animals.slice(0, 2));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log('-2==>',animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]


// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)


const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log('array3==>',array3);

let arr = ['a', 'b', 'c']
console.log(arr.includes('b', -3))   // false