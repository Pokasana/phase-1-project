window.addEventListener("DOMContentLoaded", (event) => {
    //Load the page
    loadData('http://localhost:3000/movies')
    .then(data => {
        console.log(data);
        moviePackageText();
        data.forEach(item => {
            createMovieList(item);
        });
    });

    //Functions
    //Fetch
    function loadData(url) {
        return fetch(url)
        .then(res => res.json())
    };

    //Add the initial appearance of movie package
    function moviePackageText() {
    const package = document.querySelector('.movie-package');
    const message = document.createElement('h2');
    message.textContent = 'Select movie from the list';
    package.appendChild(message);
    };

    //Create a list of movies
    function createMovieList(movie) {
        const container = document.querySelector('.movie-list-container');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = movie.title;
        highlightEvent(li);
        clickEvent(li, displayMovie, movie);
        ul.appendChild(li);
        container.appendChild(ul);

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

        //Test code for eventListener invokation
        // function highlightEvent(element) {
        //     console.log('one')
        //     element.addEventListener('mouseover', (e) => {
        //         console.log('two')
        //         e.target.onmouseover = event => {
        //             console.log('three')
        //             event.target.style.fontWeight = 'bold';
        //         };
        //         e.target.onmouseout = event => {
        //             console.log('four')
        //             event.target.style.fontWeight = '';
        //         };
        //         console.log('two-half')
        //     });
        //     console.log('five');
        // };

    };

    //
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