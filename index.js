window.addEventListener("DOMContentLoaded", (event) => {
    //Fetch
    loadData('http://localhost:3000/movies')
    .then(data => {
        console.log(data);
        data.forEach(item => createMovieList(item));
    })

    //Functions

    function loadData(url) {
        return fetch(url)
        .then(res => res.json())
    }

    function createMovieList(movie) {
        console.log(movie);
        const container = document.querySelector('.movie-list-container');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.setAttribute('role', 'button');
        clickEvent(li, movie);
        ul.appendChild(li);
        container.appendChild(ul);

        function hoverEvent(element) {
            element.addEventListener('mouseover', (e) => {
                e.target.setAttribute('style', )
            })
        }

        function clickEvent(element, data) {
            element.addEventListener('click', () => {
                displayMovie(data);
            })
        }
    };

    function displayMovie(movie) {
        clearPackage();

        const package = document.querySelector('.movie-package');
        const title = document.createElement('p');
        const director = document.createElement('p');
        const year = document.createElement('p');
        title.textContent = movie.title;
        director.textContent = movie.director;
        year.textContent = movie.year;
        package.append(title, director, year);

        function clearPackage() {
            const package = document.querySelector('div.movie-package');
            console.log(package);
            console.log(package.firstElementChild);
            while (package.firstElementChild) {
                package.firstElementChild.remove();
            };
        };
    };


  });