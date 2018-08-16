$(document).ready(function() {
  $("#compose-button").on("click", function() {
    $("section.new-tweet").slideToggle(function() {
      //once slide animation is complete
      $("section.new-tweet").find("textarea").focus();
    });
  })
})