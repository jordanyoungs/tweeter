# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This is a project I built as part of the web development bootcamp at Lighthouse Labs. I was able to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express and MongoDB back-end skills.

Some of the functionality the page has:
- Tweets are loaded from Mongo database
- The compose form can slide in or out of view by clicking the compose button
- Character counter updates live based on text input
- Error messages are given if a tweet is empty or over the character limit
- New tweets are submitted (with a random username and avatar) and saved
 to the Mongo database, then rendered immediately on the page without refresh

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- MongoDB
- Chance

## Screenshots

Home page
!["Screenshot of Home page"](https://github.com/jordanyoungs/tweeter/blob/master/docs/Home.png?raw=true)

Compose box being hidden (mid-animation)
!["Screenshot during slide animation"](https://github.com/jordanyoungs/tweeter/blob/master/docs/Slide.png?raw=true)

Hidden Compose box
!["Screenshot after slide, form is hidden"](https://github.com/jordanyoungs/tweeter/blob/master/docs/Slide2.png?raw=true)

Tweet Error Message
!["Screenshot of Error message"](https://github.com/jordanyoungs/tweeter/blob/master/docs/Error.png?raw=true)
