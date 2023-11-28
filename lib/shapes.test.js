const Triangle = require('./shapes').Triangle;
const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;

describe('Triangle', () => {
  test('render() method should return the correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render() method should return the correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="150" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('render() method should return the correct SVG string', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});