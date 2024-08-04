module.exports = function toReadable (number) {
  let units = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let secondDozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = '';

  if (number === 0) result = 'zero';

  if ( number > 99 ) {
    let hundreds = Math.floor(number / 100);
    result += units[hundreds - 1] + ' hundred ';

    number = number % 100;
  }

  if ( number > 19 ) {
    let tens = Math.floor(number / 10);
    result += dozens[tens - 2] + ' ';
    number = number % 10;
  }

  if ( number > 9 && number < 20 ) {
    result += secondDozen[number - 10];
  }

  if ( number > 0 && number < 10 ) {
    result += units[number - 1];
  }

  return result.trim();
}
