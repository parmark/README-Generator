function generateMarkdown(data) {
  return `
# ${data.projectTitle.answer}

## Description
${data.description.answer}

## Installation
${data.install.answer}

## Usage
${data.usage.answer}

## License
${data.license.answer}

## Contributing
${data.contrib.answer}

## Tests
${data.tests.answer}

## Bio Image

## Email Address
`;
}

module.exports = generateMarkdown;
