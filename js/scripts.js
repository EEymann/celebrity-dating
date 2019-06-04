$(document).ready(function() {
  $("form#match").submit(function(event) {
    var quote = '';
    var age = parseInt($("input#age").val());

    var gender = $("select#gender").val();

    if (age) {
    if (gender === 'female' && age <= 18) {
        quote = "Zach Morris";
    } else { 
      quote = "Jerry Seinfield";
    }
      console.log(quote);
      $("#perfect-match").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});

