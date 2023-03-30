// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}


function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;

    }
  });
  return wordCount;
}

function offensiveWords(text) {
  let offensiveTag = "<p>"
  const offenceArray = text.split(" ");
  offenceArray.forEach(function (element, index) {
    let offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    offensiveWords.forEach(function (e) {
      if (element.toLowerCase().includes(e.toLowerCase())) {
        element = "xx"
        offensiveTag = offensiveTag.concat(element)

      }
    });
    offensiveTag = offensiveTag.concat(element);
    if (index != (offenceArray.length - 1)) {
      offensiveTag = offensiveTag.concat(" ");
    }
  });
  return offensiveTag + "</p>";
}


