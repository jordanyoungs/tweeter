$(document).ready(function() {
  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();

    const tweetContent = $(this).serialize();
    $.post("/tweets", tweetContent);
  });
});
