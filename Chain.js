class Chain {
    // Object A and B are Bodies in World
    constructor(objectA, objectB) {
        // Options for our Constraint Chain
        var constraint_options = {
            bodyA: objectA,
            bodyB: objectB,
            stiffness: 0.02,
            length: 20
        }
        // Creates Constraint Chain
        this.chain = Constraint.create(constraint_options);

        // Adds Chain to World
        World.add(world, this.chain);
    }

    // Displays Line Between Both Objects
    display() {
        var bodyAPos = this.chain.bodyA.position;
        var bodyBPos = this.chain.bodyB.position;
        strokeWeight(5);
        line(bodyAPos.x, bodyAPos.y, bodyBPos.x, bodyBPos.y);
    }
}