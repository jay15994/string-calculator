function add(numbers) {
  return numbers;
}

$(document).ready(function() {
  $("#calculateButton").click(function() {
      const input = $("#inputString").val();
      const result = add(input);
      $("#result").text("Result: " + result);
  });
});
