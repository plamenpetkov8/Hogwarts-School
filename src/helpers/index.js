function containsWord(data, word) {
  return data.toLowerCase().indexOf(word.toLowerCase()) > -1;
}

function isValidName(name) {
  return name.length >= 5 && name.length <= 20;
}

const VALID_OPERATORS = ["contains", "equals", "startsWith", "endsWith"];
function isValidOperator(operator) {
  return VALID_OPERATORS.some((x) => x === operator);
}

export { containsWord, isValidName, isValidOperator };
