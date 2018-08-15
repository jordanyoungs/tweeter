/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 //--------------------TWEET DATABASE--------------------//

 const tweetDatabase = [
   {
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
   },
   {
     "user": {
       "name": "Descartes",
       "avatars": {
         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
       },
       "handle": "@rd" },
     "content": {
       "text": "Je pense , donc je suis"
     },
     "created_at": 1461113959088
   },
   {
     "user": {
       "name": "Johann von Goethe",
       "avatars": {
         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
       },
       "handle": "@johann49"
     },
     "content": {
       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
     },
     "created_at": 1461113796368
   }
 ];


//--------------------HELPER FUNCTIONS--------------------//


//takes in a number a unit and returns "number units ago"
function timePassedString(number, unit) {
  let string = `${number} ${unit}`;
  if (number > 1) string += "s";
  string += " ago";
  return string;
}

//takes in a unix timestamp and returns how long ago that timestamp was
function formatTimestamp(timestamp) {
  const currentTime = new Date().getTime();
  const timePassed = currentTime - timestamp;

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const year = 365 * day;
  const month = year / 12;

  switch (true) {
    case (timePassed >= year):
      return timePassedString(~~(timePassed / year), "year");
    case (timePassed >= month):
      return timePassedString(~~(timePassed / month), "month");
    case (timePassed >= day):
      return timePassedString(~~(timePassed / day), "day");
    case (timePassed >= hour):
      return timePassedString(~~(timePassed / hour), "hour");
    case (timePassed >= minute):
      return timePassedString(~~(timePassed / minute), "minute");
    case (timePassed >= second):
      return timePassedString(~~(timePassed / second), "second");
    default:
      return "Just Now";
  }
}


//takes in a tweet object and returns a jquery header element for it
function createTweetHeader(tweetData) {
  const $avatar = $("<img>").addClass("avatar").attr("src", tweetData.user.avatars.small);
  const $name = $("<h2>").addClass("name").append(tweetData.user.name);
  const $handle = $("<h5>").addClass("handle").append(tweetData.user.handle);

  const $header = $("<header>").append($avatar, $name, $handle);
  return $header;
}

//takes in a tweet object and returns a jquery footer element for it
function createTweetFooter(tweetData) {
  const $timestamp = $("<div>").addClass("timestamp").append(formatTimestamp(tweetData.created_at));
  const $icons = $("<span>").addClass("icons");
  $icons.append("<i class='fas fa-flag'></i>", "<i class='fas fa-retweet'></i>", "<i class='fas fa-heart'></i>");

  const $footer = $("<footer>").append($timestamp, $icons);
  return $footer;
}

//takes in a tweet object and returns a complete jquery tweet object for it
function createTweetElement(tweetData) {
  const $header = createTweetHeader(tweetData);
  const $content = $("<p>").append(tweetData.content.text);
  const $footer = createTweetFooter(tweetData);

  const $tweet = $("<article>").addClass("tweet");
  $tweet.append($header, $content, $footer);
  return $tweet;
}


//--------------------MAIN SCRIPT--------------------//


//takes in a database of tweets and appends html of all tweets onto the page
function renderTweets(tweetDatabase) {
  for (const tweetData of tweetDatabase) {
    $('#tweets').append(createTweetElement(tweetData));
  }
}

$(document).ready(function() {
  renderTweets(tweetDatabase);
});
