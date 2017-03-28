$(document).ready(function(){

  $("#numberForm").submit(function(event) {

    var counttoInput = parseFloat($("#countto").val());
    var countbyInput = parseFloat($("#countby").val());

    for (var index = countbyInput; index <= counttoInput; index += countbyInput) {
      alert(index);
};

      event.preventDefault();
});

});
