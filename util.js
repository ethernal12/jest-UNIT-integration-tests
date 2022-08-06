const { fetchData } = require('./http');

exports.generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

exports.validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }

  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate = (name, age) => {
  if (
    !this.validateInput(name, true, false) ||
    !this.validateInput(age, false, true)
  ) {
    return false;
  }
  return this.generateText(name, age);

};

exports.loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

exports.printTitle = () => {
  loadTitle().then(title => {
    console.log(title);
  });
};

exports.trimAndUppercaseIt = (movieTitle, type) => {
  if (type == 'first letter') {
    return movieTitle.trim().charAt(0).toUpperCase() + movieTitle.slice(1);
  }
  if (type == 'all capitilized') {
    return movieTitle.trim().toUpperCase();
  }
  if (type = 'every word capitilized') {
    const split = movieTitle.trim().split(' ');
    const titleCasedWord = split.map((word) => {
      return word[0].toUpperCase() + word.slice(1);

    })
    return titleCasedWord.join(' ');
  }
}

// exports.loadTitle = loadTitle();