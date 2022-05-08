let id:number = 5

let cid: any = 1
let customerId = <number>cid
customerId = 1
console.log(customerId)

// interfaces
interface UserInterface {
  id: number
  name: string
  age?: number
}

const user: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => {
  return x + y
}


interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes

class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const teddy = new Person(3, 'Teddy')


// Sub-classes

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generic

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['teddy', 'shawn', 'mike'])

