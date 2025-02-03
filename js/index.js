const getDelimiter = function (numbers) {
  if (numbers.startsWith('//')) {
    return numbers[2];
  }
  return ',';
};

const getNumbers = function (numbers, delimiter) {
  const newNumbers = numbers.replace(/\\n/g, delimiter);

  if (newNumbers.startsWith('//')) {
    return newNumbers.substring(4).split(delimiter);
  }
  return newNumbers.split(delimiter);
};

const sum = function (numbersArray) {
  let sum = 0;
  const negatives = [];

  for (let i = 0; i < numbersArray.length; i++) {
    const number = parseInt(numbersArray[i]);

    if (number < 0) {
      negatives.push(number);
    } else if (number <= 1000) {
      sum += number;
    }
  }

  if (negatives.length > 0) {
    throw new Error('Negatives not allowed: ' + negatives.join(', '));
  }

  return sum;
};

function add(numbers) {
  if (numbers === '') {
    return 0;
  }

  const delimiter = getDelimiter(numbers);
  const numbersArray = getNumbers(numbers, delimiter);

  return sum(numbersArray);
}

$(document).ready(function () {
  $('#inputString').keypress(function (event) {
    if (event.which === 13) {
      $('#calculateButton').click();
    }
  });

  $('#calculateButton').click(function () {
    try {
      const input = $('#inputString').val();
      const result = add(input);
      $('#result')
        .text('Result: ' + result)
        .removeClass('error');
    } catch (error) {
      $('#result').text(error.message).addClass('error');
    }
  });
});
