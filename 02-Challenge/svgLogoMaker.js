const fs = require('fs');
const readline = require('readline');

const promptUser = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const generateLogo = (text, textColor, shape, shapeColor) => {
  const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

const main = async () => {
  const text = await promptUser('Enter up to three characters for the text: ');
  const textColor = await promptUser('Enter the text color (keyword or hexadecimal number): ');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shape = await promptUser(`Choose a shape (${shapeOptions.join(', ')}): `);
  const shapeColor = await promptUser('Enter the shape color (keyword or hexadecimal number): ');

  generateLogo(text, textColor, shape, shapeColor);
};

main();