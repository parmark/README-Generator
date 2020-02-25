function generateMarkdown(data, userInfo) {
  
  return `
# ${data.projectTitle.answer}

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description <a name="description"></a>
${data.description.answer}

## Installation <a name="installation"></a>
${data.install.answer}

## Usage <a name="usage"></a>
${data.usage.answer}

## License <a name="license"></a>
${data.license.answer}

## Contributing <a name="contributing"></a>
${data.contrib.answer}

## Tests <a name="tests"></a> 
${data.tests.answer}

## Questions <a name="questions"></a>
### Bio
![alt text](${userInfo.bioImageURL} "")
### Email
${userInfo.userEmail}

`;
}

module.exports = generateMarkdown;
