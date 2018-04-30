function activePage() {
  var currentPage = window.location.href;
  var isHome = window.location.pathname === '/';

  var links = document.querySelectorAll('.nav__link > a');
  links.forEach(function (link) {
    if (link["href"] === currentPage && !isHome) {
      link.parentElement.classList.add('nav__active');
    }
  });
}

module.exports = activePage;
