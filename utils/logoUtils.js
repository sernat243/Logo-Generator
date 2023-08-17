const { Circle, Square, Triangle } = require('../lib/shapes.js');

class Logo {
  constructor(text, textColor, shapeType, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeType = shapeType;
      this.shapeColor = shapeColor;
  }

  generateSVG() {
    let shape = '';

    if (this.shapeType === 'circle') {
      shape = new Circle().getSvgElement();
    } else if (this.shapeType === 'square') {
      shape = new Square().getSvgElement();
    } else if (this.shapeType === 'triangle') {
      shape = new Triangle().getSvgElement();
    }

    const svgTemplate = `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape}
        <text x="100" y="100" font-size="16" fill="${this.textColor}" text-anchor="middle">
          ${this.text}
        </text>
      </svg>
    `;
    return svgTemplate;
  }
};

module.exports = {
    Logo,
};