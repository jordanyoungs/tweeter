$(document).ready(function() {
  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
    const tweetContent = $(this).serialize();
    //slice the "text=" from start of tweetContent and count length
    const tweetLength = tweetContent.slice(5).length;

    //if tweet length is 0 or undefined
    if (!tweetLength) {
      alert("Tweet cannot be empty!");
    //if tweet length is over 140 characters
    } else if (tweetLength > 140) {
      alert("Tweet cannot exceed 140 characters!");
    } else {
      $.post("/tweets", tweetContent);
    }
  });
});
