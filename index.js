window.addEventListener("DOMContentLoaded", (event) => {
    //Load the page
    loadData('http://localhost:3000/movies')
    .then(data => {
        console.log(data);
        data.forEach(item => createMovieList(item));
    })

    //Functions
    //Fetch
    function loadData(url) {
        return fetch(url)
        .then(res => res.json())
    }

    //Create a list of movies
    function createMovieList(movie) {
        console.log(movie);
        const container = document.querySelector('.movie-list-container');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = movie.title;
        // li.setAttribute('role', 'button');
        highlightEvent(li);
        clickEvent(li, displayMovie, movie);
        ul.appendChild(li);
        container.appendChild(ul);

        //Add the initial appearance of movie package
        const package = document.querySelector('.movie-package');
        const message = document.createElement('h2');
        message.textContent = 'Select movie from the list';
        package.appendChild(message);

        //Helper function
        //Click event
        function clickEvent(element, func, data) {
            element.addEventListener('click', () => {
                func(data);
            })
        };
        //Mouseover event
        function highlightEvent(element) {
            element.addEventListener('mouseover', (e) => {
                e.target.style.fontWeight = 'bold';

                setTimeout(() => {
                    e.target.style.fontWeight = ''
                }, 500);
            });
        };
    };

    function displayMovie(movie) {
        clearPackage();

        const package = document.querySelector('.movie-package');
        const title = document.createElement('p');
        const director = document.createElement('p');
        const year = document.createElement('p');
        title.textContent = `'${movie.title}'`;
        director.textContent = movie.director;
        year.textContent = movie.year;
        package.append(title, director, year);

        function clearPackage() {
            const package = document.querySelector('div.movie-package');
            while (package.firstElementChild) {
                package.firstElementChild.remove();
            };
        };
    };


  });