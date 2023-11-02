// Scenario:
// You're building an application for a movie streaming platform. The platform 
// wants to recommend movies based on the user's mood and the time of day.


// Change these values to test different scenarios
let rand = Math.floor(Math.random() * 5);

let mood; // Possible values: "happy", "sad", "excited", "bored", "tired"
switch (rand) {
  case 0:
    mood = "happy";
    break;
  case 1:
    mood = "sad";
    break;
  case 2:
    mood = "excited";
    break;
  case 3:
    mood = "bored";
    break;
  case 4:
    mood = "tired";
    break;
  default:
    mood = "happy";
    break;
}

rand = Math.floor(Math.random() * 4);
let timeOfDay; // Possible values: "morning", "afternoon", "evening", "night"
switch (rand) {
  case 0:
    timeOfDay = "morning";
    break;
  case 1:
    timeOfDay = "afternoon";
    break;
  case 2:
    timeOfDay = "evening";
    break;
  case 3:
    timeOfDay = "night";
    break;
  default:
    timeOfDay = "morning";
    break;
}

let recommendedMovie;

// 1. Implement the recommendation logic using compound conditionals
// - If the user is "tired" OR it's "night", recommend "Relaxing Ambient Film".
// - If the user is "excited" AND it's NOT "morning", recommend "High-Octane Thriller".
// - If the user is "bored" AND it's "afternoon" OR "happy" AND it's "evening", recommend "Engaging Mystery Film".
// - In all other cases, recommend "Popular Choice Film".
if (mood === "tired" || timeOfDay === "night") {
  recommendedMovie = "a Relaxing Ambient Film";
}
else if (mood === "excited" && timeOfDay !== "morning") {
  recommendedMovie = "a High-Octane Thriller";
}
else if ((mood === "bored" && timeOfDay === "afternoon") || (mood === "happy" && timeOfDay === "evening")) {
  recommendedMovie = "an Engaging Mystery Film";
}
else {
  recommendedMovie = "a Popular Choice Film";
}

// 2. Console log the recommended movie
console.log("You are " + mood + ". It is " + timeOfDay + ". I recommend watching " + recommendedMovie);