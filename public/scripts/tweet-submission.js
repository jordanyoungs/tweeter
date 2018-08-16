$(document).ready( () => {
  $("#new-tweet form").on("submit", function(event) {
    event.preventDefault();
    const $form = $(this);
    const tweetContent = $form.find("textarea").val();
    const tweetLength = tweetContent.length;

    //if tweet length is 0 or undefined
    if (!tweetLength) {
      alert("Tweet cannot be empty!");

    //if tweet length is over 140 characters
    } else if (tweetLength > 140) {
      alert("Tweet cannot exceed 140 characters!");

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
