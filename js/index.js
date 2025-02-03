function add(numbers) {
  return numbers;
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
