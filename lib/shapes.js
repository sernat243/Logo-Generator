class Circle {
    getSvgElement() {
        return `<circle cx="100" cy="100" r="90" fill="currentColor" />`;
      }
}

class Square {
    getSvgElement() {
        return `<rect x="10" y="10" width="180" height="180" fill="currentColor" />`;
      }
}

class Triangle {
    getSvgElement() {
        const height = Math.sqrt(3) / 2 * 180;
        const points = `100,10 ${100 - 180 / 2},${10 + height} ${100 + 180 / 2},${10 + height}`;
        return `<polygon points="${points}" fill="currentColor" />`;
      }
}

module.exports = {
    Circle,
    Square,
    Triangle,
};