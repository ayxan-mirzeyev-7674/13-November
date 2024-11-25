function capitalizeSentence(sentence) {
  let sentenceList = sentence
    .split(" ")
    .map((elem) => elem[0].toUpperCase() + elem.slice(1))
    .join(" ");
  return sentenceList;
}

function isValidNumber(number) {
  let condition1 = number.length == 12 && !isNaN(number.slice(1));
  let condition2 = number.startsWith("+7");
  return condition1 && condition2;
}

function numCounter(text) {
  let onlyLetters = text.replace(/[^a-z]/gi, "");
  return onlyLetters.length;
}

function isLucky(number) {
  return (
    Number(String(number)[0]) +
      Number(String(number)[1]) +
      Number(String(number)[2]) ==
    Number(String(number)[3]) +
      Number(String(number)[4]) +
      Number(String(number)[5])
  );
}

sentence = "hello world";
number = "+71111111111";
numCounterSentence = "I scored 18.5/20 on my CS exam last week";
numberLuck = 234801;

console.log(capitalizeSentence(sentence));
console.log(isValidNumber(number));
console.log(numCounter(numCounterSentence));
console.log(isLucky(numberLuck));
