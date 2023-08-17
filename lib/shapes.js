class Circle {
    getSvgElement(shapeColor) {
        return `<circle cx="100" cy="100" r="90" fill="${shapeColor}" />`;
      }
}

class Square {
    getSvgElement(shapeColor) {
        return `<rect x="10" y="10" width="180" height="180" fill="${shapeColor}" />`;
      }
}

class Triangle {
    getSvgElement(shapeColor) {
        const height = Math.sqrt(3) / 2 * 180;
        const points = `100,10 ${100 - 180 / 2},${10 + height} ${100 + 180 / 2},${10 + height}`;
        return `<polygon points="${points}" fill="${shapeColor}" />`;
      }
}

module.exports = {
    Circle,
    Square,
    Triangle,
};