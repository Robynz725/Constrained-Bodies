class Chain {
    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 0.5

        }

        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling);
    }

    showChain() {

        push();
        strokeWeight(5);


        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        line(pointA.x, pointA.y, pointB.x, pointB.y)


        pop();
    }

}
