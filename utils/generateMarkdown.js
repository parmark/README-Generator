function generateMarkdown(data) {
  return `
# ${data[1]}

## Description
${data[2]}

## Table of Contents
${data[3]}

## Installation
${data[4]}

## Usage
${data[5]}

## License
${data[6]}

## Contributing
${data[7]}

## Tests
${data[8]}

## Bio Image

## Email Address
`;
}

module.exports = generateMarkdown;
