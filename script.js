// script.js

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
        })
        .catch(err => console.error('Error loading page: ', err));
}

// Example of attaching event listeners to links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        loadContent(this.getAttribute('href'));
    });
});
