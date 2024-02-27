export function infoOpen() {
  const infoBtns = document.querySelectorAll('.information-btn');
  infoBtns.forEach(infoBtn => {
    infoBtn.addEventListener('click', () => {
      const icon = infoBtn.querySelector('.icon_information');
      icon.classList.toggle('icon_information-active');

      const infoMain = infoBtn.nextElementSibling;

      if (infoMain.style.maxHeight) {
        infoMain.style.maxHeight = null;
        infoMain.style.marginBottom = '0';
      } else {
        infoMain.style.maxHeight = infoMain.scrollHeight + 'px';
        infoMain.style.marginBottom = window.matchMedia('(min-width: 1440px)').matches
          ? '60px'
          : '30px';
      }
    });
  });
}
