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

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const bold = boldPassage(word, passage);
    const offe = offensiveWords(bold)
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#offense").html(offe)
    $(".one").show();
    $(".two").show();
    
  });

}); 5


