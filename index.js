// Constants for File System (FS), svg2img and Circle, Square, Triangle from Shapes in Lib
const fs = require('fs');
const svg2img = require('svg2img');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { join } = require('path');

// import of inquirer
Promise.resolve()
  .then(() => import('inquirer'))
  .then((module) => {
    const inquirer = module.default;

    // Prompts the user for input (Three Characters, Text color, Desired shape and Shape color)
    inquirer
      .prompt([
        {
          name: 'text',
          message: 'Enter up to three characters:',
          validate: (input) => input.length <= 3,
        },
        {
          name: 'textColor',
          message: 'Enter the text color:',
        },
        {
          name: 'shape',
          type: 'list',
          message: 'Choose a shape:',
          choices: ['Circle', 'Square', 'Triangle'],
        },
        {
          name: 'shapeColor',
          message: 'Enter the color of the shape:',
        },
      ])
      .then(({ text, textColor, shape, shapeColor }) => {
        let shapeInstance;

        // Set shape size
        if (shape.toLowerCase() === 'circle') {
          shapeInstance = new Circle();
        } else if (shape.toLowerCase() === 'square') {
          shapeInstance = new Square();
        } else if (shape.toLowerCase() === 'triangle') {
          shapeInstance = new Triangle();
        }

        // Set the color of the shape
        shapeInstance.setColor(shapeColor);

        // Generate the SVG markup
        const svg = `
          <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render(text)}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="36">${text}</text>
          </svg>
        `;

        // Save the SVG markup to a file in the "examples" folder
        const svgPath = join(__dirname, 'logos', 'logo.svg');
        fs.writeFileSync(svgPath, svg, 'utf-8');

        // Convert the SVG file to an image
        svg2img(svg, { width: 300, height: 200 }, (error, buffer) => {
          if (error) {
            console.error('Failed to generate image:', error);
            return;
          }

          // Save the image to a file in the "examples" folder
          const imagePath = join(__dirname, 'logos', 'logo.png');
          fs.writeFileSync(imagePath, buffer);
          // Console log when the logo is generated
          console.log('Generated logo.svg and logo.png in the "logos" folder');
        });
      })
      // Catch error and log to console if application fails to run
      .catch((error) => {
        console.error('Failed to run the application:', error);
      });
  })
  // Catch error and log to console if dynamic import of inquirer fails
  .catch((error) => {
    console.error('Failed to import inquirer:', error);
  });