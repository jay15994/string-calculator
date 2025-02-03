const sum = function(numbersArray) {
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    const number = parseInt(numbersArray[i]);

    sum += number;
  }

  return sum;
}

function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  const numbersArray = numbers.split(",");

  return sum(numbersArray);
}

$(document).ready(function() {
  $("#inputString").keypress(function(event) {
    if (event.which === 13) {
      $("#calculateButton").click();
    }
  });

  $("#calculateButton").click(function() {
      const input = $("#inputString").val();
      const result = add(input);
      $("#result").text("Result: " + result);
  });
});
