$(document).ready(function() {
  $("form.factorial").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var multiply = 1;
    var numbers = [];

    for (var i = 1; i <= input; i++) {
      numbers.push(i);
    }
    for (var i =1; i < input; i++) {
      multiply = multiply * numbers[i];
    }
    $("#result").text(input + "! is equal to " + multiply);

  });
});
