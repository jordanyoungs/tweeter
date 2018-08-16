$(document).ready( () => {
  //slideUp error message right away, to keep it hidden
  $("#error-message").slideUp(0);

  $("#new-tweet form").on("submit", function(event) {
    event.preventDefault();
    $("#error-message").slideUp(0);
    const $form = $(this);
    const tweetContent = $form.find("textarea").val();
    const tweetLength = tweetContent.length;

    //if tweet length is 0 or undefined
    if (!tweetLength) {
      $("#error-message").text("Tweet cannot be empty!");
      $("#error-message").slideDown(300);

    //if tweet length is over 140 characters
    } else if (tweetLength > 140) {
      $("#error-message").text("Tweet cannot exceed 140 characters!");
      $("#error-message").slideDown(300);

    //else tweet is valid
    } else {
      const urlEncodedTweet = $form.serialize();
      $.post("/tweets", urlEncodedTweet, () => {
        //on success clear textarea and reset character counter
        $form.find("textarea").val('');
        $form.find(".counter").html(140);

        //then immediately render the new tweet
        $.get("/tweets", (tweetDatabase) => {
          $('#tweets').prepend(createTweetElement(tweetDatabase[0]));
        });
      });
    }
  });
});
