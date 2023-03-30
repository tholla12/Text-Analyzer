# Tola bello
## Text Analyzer

## Description
* _The Text Analyzer is a website that allows the user to type a text and it will count the word and gives the user the expected output_


## Setup/Installation Requirement
* _install Text Analyzer by cloning this respository_
* _Navigate to the top level of the directory_
* _open index23.html in your browser__

## Technologies Used
* _Javascript_
* _html_
* _css_

## License
_API Copyleft_

Copyleft (c) 2023 TolaBello

## Contact details
 * _tola bello {tolabello4@gmail.com}_

 ## Text Driven Development
 * Describe: wordCounter();

Test: "It return 1 if a passage just one word."

Code: const text = "hello";

wordCounter(text);

Expected Output: 1


Test: "It return 2 if a passage just two word."

Code: const text = "hello there";

wordCounter(text);

Expected Output: 2


Test: "It should return 0 for a string that is only space"

Code: wordCounter(" ");

Expected Output: 0


Test: "It should not count numbers as words."

Code: wordCounter("hi there 77 19");

Expected Output: 2


* Describe: numberOfOccurrencesInText()

Test: "If an empty string is passed in as a word, it should return 0."

Code:const word = "";

const text = "red RED Red!";

wordCounter(word, text);

Expected Output: 0


* Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."

Code:const word = "hello";

const text = "yo";

boldPassage(word, text);

Expected Output: "<p>yo</p>"


* Describe: offensiveWords()

Test: "It should point out the offensve words if written in the passage"

Code:const text = "zoinks";

boldPassage(text);

Expected Output: xxxx

