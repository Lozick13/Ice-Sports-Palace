export function sidebarOpen() {
  const sidebarBtn = document.querySelector('#sidebar-open');
  const sidebar = document.querySelector('.sidebar');

  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
  });
}

export function sidebarClose() {
  const sidebarBtn = document.querySelector('#sidebar-close');
  const sidebar = document.querySelector('.sidebar');

  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
}
