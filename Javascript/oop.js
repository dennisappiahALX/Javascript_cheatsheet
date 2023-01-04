const _radius = new WeakMap()
const _move = new WeakMap()

class Circle{
    constructor(radius){
      _radius.set(this, radius);   //setting private methods and property (Abstraction)
                                   
      _move.set(this, () => {
        console.log('move');
      })
    }

     //instance method
    draw() {
        console.log('draw');
    }

    get radius() {
        return _radius.get(this);   //defining getter method to behave as a property
    }

    set radius(value) {           //defining a setter function to change value of radius
        if (value <= 0) throw new Error('Inavlid radius');   

        _radius.set(this, value);
    }

    //static method
    static parse(str) {         //a method not tied to any object
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c3 = Circle.parse('{"radius": 1}');

c3.radius = 10;

console.log(c3.radius)


//Inheritance - Cicle IS A shape

class Shape{
    constructor(colour){
        this.colour = colour;
    }

    move() {
        console.log('can be moved');
    }
}


class Circle extends Shape{  //we use the Super() method to allow paremeters or properties of the Parent Class(Shape)
    constructor(colour, radius){    //inheriting colour parameter from the Parent class(Shape) to the child class(Circle)
        super(colour)
        this.radius = radius;
    }

    draw() {
        console.log('can be drawn')
    }

    move() {
        super.move();       //we can re-use the move method from the Parent class this way!
        console.log('circle can be moved!');  //overiding move method from the Parent class - Method overriding
    }
}


c_1 = new Circle('red', 4);

console.log(c_1);
c_1.move()


//Stack Implementation

const _items = new WeakMap()

class Stack{
    constructor(){
        _items.set(this, []); 
    }

    push(obj) {
        _items.get(this).push(obj); 
    }
    
    pop(){
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty');

        return items.pop();
    }

    peek() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty');

        return items[items.length - 1]
    }

    get count() {
        return _items.get(this).length;
    }
}

