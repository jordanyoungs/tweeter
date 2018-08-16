// Update the character counter as the user types, turn red if negative

$(document).ready( () => {
  $("#new-tweet textarea").on("keyup", function() {
    const $tweet = $(this);

    const remainingChars = 140 - $tweet.val().length;
    const $counter = $tweet.siblings("footer").find(".counter");

    $counter.html(remainingChars);
    $counter.toggleClass("negative", remainingChars < 0);
  });
});
