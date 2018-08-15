$(document).ready(function() {
  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
    const tweetContent = $(this).find("textarea").val();
    const tweetLength = tweetContent.length;

    //if tweet length is 0 or undefined
    if (!tweetLength) {
      alert("Tweet cannot be empty!");

    //if tweet length is over 140 characters
    } else if (tweetLength > 140) {
      alert("Tweet cannot exceed 140 characters!");

    } else {
      const urlEncodedTweet = $(this).serialize();
      $.post("/tweets", urlEncodedTweet);
      //clear textarea
      $(this).find("textarea").val('');
    }
  });
});
