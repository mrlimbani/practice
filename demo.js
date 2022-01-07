const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();

let o = new Object(Boolean());

console.log('o==>',o);


const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
console.log('Array Return object1==>',Object.values(object1));
  // expected output: Array ["somestring", 42, false]
  
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log('Sort as per keys arrayLikeObj2=>',Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']


const my_obj = Object.create(
    {}, 
    { 
        getFoo: { 
            value: function(){ 
                return this.foo; 
            } 
        } 
    }
);
console.log('my_obj==>',my_obj);
my_obj.foo = 'bar';
console.log('my_obj==>',my_obj);

console.log('my_obj=>',Object.values(my_obj)); // ['bar']

console.log(Object.values('foo')); // ['f', 'o', 'o']