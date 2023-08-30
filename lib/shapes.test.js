// Constant for Circle, Square and Triangle which requires the class scripts from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

// Test for Circle with render method and return correct SVG string
test('Circle render() method returns correct SVG string', () => {
  const shape = new Circle();
  shape.setColor('green');
  const expectedSvg = '<circle cx="150" cy="100" r="50" fill="green" />';
  expect(shape.render()).toEqual(expectedSvg);
});

// Test for Square with render method and return correct SVG string
test('Square render() method returns correct SVG string', () => {
  const shape = new Square(); 
  shape.setColor('red'); 
  shape.setText('ABC'); 

  const expectedSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="100" height="100" fill="red" /><text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="36">ABC</text></svg>`;

  const renderedSvg = shape.render().replace(/\s/g, ''); 
  const expectedSvgWithoutWhitespace = expectedSvg.replace(/\s/g, '');
  expect(renderedSvg).toEqual(expectedSvgWithoutWhitespace);
});

// Test for Triangle with render method and return correct SVG string
test('Triangle render() method returns correct SVG string', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  const expectedSvg = '<polygon points="150,18 244,182 56,182" fill="blue" />';
  expect(shape.render()).toEqual(expectedSvg);
});