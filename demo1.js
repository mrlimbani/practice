const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log('target==>',target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log('returnedTarget==>',returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }


let array1 = [1,2,3,4];
let array2 = [4,5,6,7];
let array3 = array1;

array3.push(5);
array1 = [];

console.log('array1==>',array1);
console.log('array2==>',array2);
console.log('array3==>',array3);