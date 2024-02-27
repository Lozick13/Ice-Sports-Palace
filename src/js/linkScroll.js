export function linkScroll(callback) {
  const links = document.querySelectorAll('.navigation__link');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const url = link.href ? link.href : link.action;

      if (window.matchMedia('(max-width: 1439px)').matches && link.href) {
        callback();
      }

      const block = document.querySelector(url.substring(url.lastIndexOf('/') + 1));
      const offsetTop = block.getBoundingClientRect().top + window.scrollY - 105;

      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });
}
