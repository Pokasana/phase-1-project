window.addEventListener("DOMContentLoaded", (event) => {
    //Fetch
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(item => createMovieList(item));
    })

    //Functions
    function createMovieList(movie) {
        console.log(movie);
        const container = document.querySelector('.movie-list-container');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = movie.title;
        ul.appendChild(li);
        container.appendChild(ul);
    };

  });