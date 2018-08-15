$(document).ready(function() {
  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
    console.log("I got the right thing targeted");
    console.log("event", event);
    console.log("event body", event.body);
    // const $tweet = $(this);

    // const remainingChars = 140 - $tweet.val().length;
    // const $counter = $tweet.siblings("footer").find(".counter");

    // $counter.html(remainingChars);
    // $counter.toggleClass("negative", remainingChars < 0);
  });
});
