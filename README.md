# Phase 1 Project -  Favorite Movie List
This is a work for phase 1 project. I focused on keeping the structure as simple as possible to make the required features that I added to this app easy to be shown.

# Feature of this application
- Single page app to introduce my favorite movies to the user
- There is a list of 10 movies
- By clicking one of the titles, the user can see information about the selected movie - title, director and the year it was shown on screen.

# Data and how it is handled
- Asynchronous data handling by using JSON
- db.json has 10 movies that each of which has three items, title, director, and year

# How this app meets the requirements
The code includes...
- 10 objects with 3 attributes in db.json
- one instance of array iteration - forEach
- 3 event listeners: 
    'DOMContentLoaded' - Load all the data when the page was opened.
    'Mouseover' - Make the movie title bold when the mouse is on to make it easier for the user to see which item they are about to choose.
    'Click' - The information for the clicked movie is displayed in the box below the list of movies.