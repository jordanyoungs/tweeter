$(document).ready(function() {
  $("#form-toggle").on("click", function() {
    $("section.new-tweet").slideToggle();
  })
})