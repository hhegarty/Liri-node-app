require("dotenv").config();

// Code to required to import the 'keys.js' file & store in a variable //

var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var spotify = new Spotify({
    id: keys.spotify.id,
  secret: keys.spotify.secret,
});


// Create the default song when a user has no input //
// Had to be more specific because Harry Styles populated //

var defaultsong = "The Sign Ace of Base"

//Creat the default movie when a user has no input //

var defaultmovie = "Mr. Nobody"

// Command line arguments //

var action = process.argv[2];
var value = process.argv[3];

// If/Else or switch statements // 

switch (action) {
    case "concert-this":
        getBands(value)
        break;
    case "spotify-this-song":

        // Create if statement for if song input is blank, defaults to song //

        if (value === "") {
            value = defaultsong;
        }
        getSongs(value)
        break;
    case "movie-this":

        // Create if statement for movie input is blank, defaults to movie //

        if (value === "") {
            value = defaultmovie;
        }
        getMovies(value)
        break;
    case "do-what-it-says":
        doWhatItSays()
        break;
    default:
        break;
}

// Call on Axios to gather data from bandsintown API and log the response //  

function getBands(artists) {
    axios.get("https://rest.bandsintown.com/artists/" + artists + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log("Name of venue:", response.data[0].venue.name);
            console.log("Venue location:", response.data[0].venue.city);
            var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
            console.log("Date of the Event:", eventDate);
        })

        // Log an error is there is one  // 

        .catch(function (error) {
            console.log(error);
        });
}

// Call on Spotify to gather data related to song and log response // 

function getSongs(songName) {
    if (songName === "") {
        songName = "The Sign Ace of Base";
    }

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occured: ' + err);
        }

        // Display Artists// 
        console.log("Artists:", data.tracks.items[0].album.artists[0].name)

        // Preview link of the song on Spotify //
        console.log("Preview Link: ", data.tracks.items[0].preview_url)

        // Provide the albulm song is from // 
        console.log("Album Name: ", data.tracks.items[0].album.name)

    });
}

// Call on Axios to gather data from OMDB API and log results //

function getMovies(movieName){
    axios.get("https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
    .then (function(response){
        var results = `
      Title of the movie: ${response.data.Title}
      Year the movie came out: ${response.data.Year}
      IMDB Rating of the movie: ${response.data.Rated}
      Rotten Tomatoes Rating of the movie: ${response.data.Ratings[1].Value}
      Country where the movie was produced: ${response.data.Country}
      Language of the movie: ${response.data.Language}
      Plot of the movie: ${response.data.Plot}
      Actors in the movie: ${response.data.Actors}`;
      console.log(results)
    })

    .catch(function(error){
        console.log(error);
    });

    // If user doesn't input movie title return default movie //
    
    if(movieName === "Mr.Nobody"){
        console.log("----------");
        console.log("If you haven't watched Mr.Nobody, then you should:http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    };
}

// 

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(err, data){
        data = data.split(",");
        var action = data[0]
        var value = data[1]

        switch(action){
            case "concert-this":
                getBands(value)
                break;
            case "spotify-this-song":
                getSongs(value)
                break;
            case "movie-this":
                getMovies(value)
                break;
                default:
                break;
        }
    
    });
}


