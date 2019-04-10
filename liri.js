// require("./.env").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var Concert = require("./concert")
var myConcert = new Concert();
var search = process.argv[2];
var term = process.argv[3];

switch(search){
    case "concert-this":
      console.log("Concert Log");
      myConcert.findConcert(term)
    break;
    case "spotify-this-song":
        console.log("spotify this log");
    break;
    case "movie-this":
        console.log("movie this log");
    break;
    case "do-what-it-says":
        console.log("Do What!");
    break;
      default:
        console.log("Invalid Command");
        break;

}