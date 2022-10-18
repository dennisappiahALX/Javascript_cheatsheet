//Abstraction - Hide the details, show the essentials - Using variables to declare 
//private properties and methods

function Circle(radius) {                  //closure is what objects are accessible by a method publicly? 
    this.radius = radius;

    let defaultlocation = {x:0, y:0};        //private object

    let computeOptimization = function(factor){       //private method
        console.log('yes');
    }

    this.draw = function() {

        let x, y;  //closure objects

        computeOptimization(0.1);
       
        console.log('draw');
    };
}

const circle = new Circle(5);
circle.draw();



//Using Getters & Setters 

function Circle(radius) {                  //closure is what objects are accessible by a method publicly? 
    this.radius = radius;

    let defaultLocation = {x: 0 , y: 0};        //private object

    this.getDefaultLocation = function() {
        return defaultLocation;                //Getter - want to access private object as a property not a method
    };

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) { 
            //we can perform validation on the value parameter
            
            if (!value.x || !value.y)
            throw new Error('Invalid Location!');
    
            defaultLocation = value;
        }
    });
}

let circle_1 = new Circle(10);
circle.defaultLocation = 1; //invalid location error
circle.draw();

//Prototypes & Instances

function Circle(radius) {   
    //instance members
    this.radius = radius;

    this.move = function(){
        console.log('move');
    }
}

//prototype members
Circle.prototype.draw = function(){
    console.log('draw');
}

const c1 = new Circle(5);
c1.draw()

console.log(Object.keys(c1))   // - only return instance members

for(let key in c1) console.log(key);  //Returns all members(instance + prototype)

//stopwatch exercise Solution

//property -duration  method:// reset, start, stop

function StopWatch(){  

    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function() { return duration}

        //setter
    }) 

    
    Object.defineProperty(this, 'startTime', {
        get: function() { return this.startTime}
    }) 

    
    Object.defineProperty(this, 'endTime', {
        get: function() { return this.endTime}
    }) 

    
    Object.defineProperty(this, 'running', {
        get: function() { return this.running}
    }) 
}


StopWatch.prototype.start = function(){
    if (this.running)
    throw new Error('Stopwatch has already started.');

    this.running = true;

    this.startTime = new Date;
}


StopWatch.prototype.start = function(){
    if (!this.running)
    throw new Error('Stopwatch has not started!');

    this.running = false;

    this.endTime = new Date;

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds; 
}


StopWatch.prototype.start = function(){
    this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;   
}


//Prototypical Inheritance

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype); //Child inheriting method from Shape
    Child.prototype.constructor = Child;
}

function Shape(color){            //Base Object
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("Shape duplicate");
}

function Circle(radius, color){
    Shape.call(this, color);              //Calling the super constructor
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function(){
    console.log('draw');
}

Circle.prototype.duplicate = function(){       //overiding method in the Parent object
    console.log('duplicate circle now!');
}

function Square(size){
    this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function(){       
    console.log('duplicate square now!');
}

let shapes = [      //Different implementation form of the duplicate method will be called-//Polymorphism
    new Circle(8, 'blue'),     
    new Square(4)
]


for (let shape of shapes)
    shape.duplicate();








