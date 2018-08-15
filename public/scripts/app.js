/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//document.ready recommended syntax
$( function() {
  //document is ready here
});

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

function createTweetElement(tweetData) {
  const $header = createTweetHeader(tweetData);
  const $tweet = $("<article>").addClass("tweet");
  $tweet.append($header);
  return $tweet;
}

function createTweetHeader(tweetData) {
  const $avatar = $("<img>").addClass("avatar").attr("src", tweetData.user.avatars.small);
  const $name = $("<h2>").addClass("name").append(tweetData.user.name);
  const $handle = $("<h5>").addClass("handle").append(tweetData.user.handle);

  const $header = $("<header>").append($avatar, $name, $handle);
  return $header;
}
// <section id="tweets">

//   <article class="tweet">
//     <header>
//       <img class="avatar" src="https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png">
//       <h2 class="name">Bill Fields</h2>
//       <h5 class="handle">@MrFields</h5>
//     </header>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus facilisis, consequat lorem in, venenatis odio. Duis pulvinar nisi s</p>
//     <footer>
//       <div class="timestamp">10 Days Ago</div>
//       <span class="icons">
//         <i class="fas fa-flag"></i>
//         <i class="fas fa-retweet"></i>
//         <i class="fas fa-heart"></i>
//       </span>
//     </footer>
//   </article>

// </section>