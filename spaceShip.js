// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate() {
        const { name, topSpeed } = this;
        console.log(`${name} moving to ${topSpeed}`)
    }
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const enterprise = new SpaceShip('Enterprise', '1 lightyear');
const deathStar = new SpaceShip('Death Star', '5 lightyears');

enterprise.accelerate();
deathStar.accelerate();