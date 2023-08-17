const { Circle, Square, Triangle } = require('./shapes');

describe('Shape Classes', () => {
  test('Circle should create a valid SVG element', () => {
    const circle = new Circle();
    expect(circle.getSvgElement('red')).toContain('<circle');
  });

  test('Square should create a valid SVG element', () => {
    const square = new Square();
    expect(square.getSvgElement('blue')).toContain('<rect');
  });

  test('Triangle should create a valid SVG element', () => {
    const triangle = new Triangle();
    expect(triangle.getSvgElement('green')).toContain('<polygon');
  });
});