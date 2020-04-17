/* Answer 3 */
class Circle {
  constructor(x = 0, y = 0, r = 0) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  isOverlapping = (c2) => {
    const xDistance = this.x - c2.x;
    const yDistance = this.y - c2.y;
    //Find the Distance Between Two Points
    const centerDistance = Math.sqrt(
      xDistance * xDistance + yDistance * yDistance
    );
    const collisionDistance = this.r + c2.r;
    console.log("centerDistance = ", centerDistance);
    console.log("collisionDistance = ", collisionDistance);
    return centerDistance <= collisionDistance;
  };
}
const c1 = new Circle(3, 1, 2);
const c2 = new Circle(1, 1, 1);
console.log("isOverlappingCircles ---> ", c1.isOverlapping(c2));

/* Answer 4 */
class CircleStore {
  constructor() {
    this.store = [];
  }
  addCircle = (circle) => {
    this.store.push(circle);
  };
  getOverlapingCircles = (circle) => {
    return this.store.filter((c) => c.isOverlapping(circle));
  };
}

const store = new CircleStore();
store.addCircle(c1);
store.addCircle(c2);
const circle = new Circle(5, 1, 1);
console.table(store.getOverlapingCircles(circle));
