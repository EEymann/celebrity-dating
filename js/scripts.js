$(document).ready(function() {
  $("form#match").submit(function(event) {
    var quote = '';
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var sexuality = $("select#sexuality").val();


    if (age) {
      if (gender === 'female' && age <= 18) {
          quote = "Zach Morris";
      }

      if (gender === 'female' && age >= 19) {
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
