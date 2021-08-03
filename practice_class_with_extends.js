class Animal {
    //constructor
    constructor(name) {
        this.name = name[0].toUpperCase() + name.slice(1)
    }
    
    introduce() {
        console.log("Hello this is " + this.name)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    
    introduce() {
        super.introduce()
        console.log("Meow!")
    }
}

var cat = new Cat("snows")

cat.introduce()