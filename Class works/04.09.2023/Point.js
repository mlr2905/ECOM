class Point {
    constructor(point_x, point_y) {
        this.x = point_x
        this.y = point_y
    }
    print() {
      document.write(`(${this.x}, ${this.y})`)
    }
    equals(another_point) {
      return this.x == another_point.x && this.y == another_point.y
    }
}