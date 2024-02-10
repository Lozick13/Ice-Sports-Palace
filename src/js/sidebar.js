export function sidebarOpen() {
  const sidebarBtn = document.querySelector('#sidebar-open');
  const sidebar = document.querySelector('.sidebar');
  const body = document.querySelector('body');

  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    body.classList.add('scroll-bar-off');
  });
}

export function sidebarClose() {
  const sidebarBtn = document.querySelector('#sidebar-close');
  const sidebar = document.querySelector('.sidebar');
  const body = document.querySelector('body');

  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    body.classList.remove('scroll-bar-off');
  });
}
