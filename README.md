# Liri-node-app
LIRI is a Language Interpretation and Recognition Interface

**Overview**
<br>
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

**Objective**
<br>
Use Node JS to create a LIRI bot, like Iphone's SIRI, but takes commands through Language vs Speech using the following comands:
* concert.this
* spotify-this-song
* movie-this
* do-what-it-says

**API's Used**
* Spotify (https://developer.spotify.com/)
* OMDB (http://www.omdbapi.com)
* Bands In Town  (http://www.artists.bandsintown.com/bandsintown-api)

**NPM Packages**
* Node-Spotify-API  (https://www.npmjs.com/package/node-spotify-api)
* Axios (https://www.npmjs.com/package/axios)
* Moment (https://www.npmjs.com/package/moment)
* DotEnv (https://www.npmjs.com/package/dotenv)

**What Each Command Does**
*LIRI* searches *Bands In Town* for concerts, *Spotify* for songs, and *OMDB* for movies.

1. node liri.js concert-this "artist/band name here"
 - Searches the Bands in Town Artist Event API for an artist and renders the following information about them in the terminal/bash window
 * Name of venue
 * Venue location
 * Date of event

 2. node liri.js spotify-this-song "song name here"
 - Displays the following information about the selected song in the terminal/bash window
 * Artist
 * Preview Link
 * Album name
 - if no song is provided, the program defaults to "The Sign" by Ace of Base

 3. node liri.js movie-this "movie name here"  
 - Displays the following information about the selected song in your terminal/bash window
 * Title
  * Year movie was released
  * IMDB Rating
  * Rotten Tomatoes Rating
  * Country where movie was produced
  * Language(s)
  * Plot of the movie
  * Actors in the movie
  - If the user does not enter a movie selection, the program outputs data for the movie 'Mr. Nobody.'
 
 4. node liri.js do-what-it-says
 * Runs spotify-this-song for | "I Want it That Way"










