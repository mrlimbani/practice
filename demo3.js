
const isNumber = (a, b) => {
    console.log('a==>', a, 'b==>', b);
    return a > b;
}

var numbers = [4, 2, 5, 1, 3];

numbers.sort(function (a, b) {
    // console.log('a==>',a,'b==>',b);
    return a - b;
});

numbers.sort(isNumber);

console.log('number==>', numbers);
// [1, 2, 3, 4, 5]



var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value

const numberSort = (a, b) => {
    return a.value - b.value;
}

console.log('numberSort==>', items.sort(numberSort));

// sort by name
items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

const nameSort = (a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}

console.log('nameSort==>', items.sort(nameSort));

const map1 = items.map( (x) => {
    x.newValue = x.value * 2;
    return x;
});
console.log('map1==>',map1);
