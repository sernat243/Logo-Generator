class Logo {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    generateSVG() {
        const svgTemplate = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="180" height="180" fill="${this.shapeColor}" />
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