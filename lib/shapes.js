// Class sections for Circle, Square, and Triangle
class Circle {
    constructor() {
      // Constructor logic for Circle
      this.color = '';
    }
  
    setColor(color) {
      // Sets color of Circle
      this.color = color;
    }
  
    render() {
      // Render Circle as an SVG string
      const svg = `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
      return svg;
    }
  }
  class Square {
    constructor() {
      this.color = '';
      this.text = '';
    }
  
    setColor(color) {
      // Sets color of Square
      this.color = color;
    }
  
    setText(text) {
      // Text within the Square
      this.text = text;
    }
  
    render() {
      // Render of the Square
      const squareSize = 100;
      const squareX = 100; 
      const squareY = 50; 
      const textX = squareX + squareSize / 2;
      const textY = squareY + squareSize / 2;
  
      const svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="${squareX}" y="${squareY}" width="${squareSize}" height="${squareSize}" fill="${this.color}" />
          <text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="36">
            ${this.text}
          </text>
        </svg>
      `;
      return svg;
    }
  }
  class Triangle {
    constructor() {
      // Constructor logic for Triangle
      this.color = '';
    }
  
    setColor(color) {
      // Sets color of Triangle
      this.color = color;
    }
  
    render() {
      // Render Triangle as an SVG string
      const svg = `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
      return svg;
    }
  }
  
  // Module exports for Circle, Square, and Triangle
  module.exports = {
    Circle,
    Square,
    Triangle,
  };