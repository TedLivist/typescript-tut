"use strict";
let id = 5;
let cid = 1;
let customerId = cid;
customerId = 1;
console.log(customerId);
const user = {
    id: 1,
    name: 'John',
};
const add = (x, y) => {
    return x + y;
};
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const teddy = new Person(3, 'Teddy');
// Sub-classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generic
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['teddy', 'shawn', 'mike']);
numArray.push('hello');
console.log(strArray);
