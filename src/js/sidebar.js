export function sidebarSwitch() {
  const sidebar = document.querySelector('.sidebar');
  const body = document.querySelector('body');
  const sidebarBtnOpen = document.querySelector('#sidebar-open');
  const sidebarBtnClose = document.querySelector('#sidebar-close');

  sidebarBtnOpen.addEventListener('click', toggleSidebar);
  sidebarBtnClose.addEventListener('click', toggleSidebar);

  function toggleSidebar() {
    sidebar.style.animation = sidebar.classList.contains('active')
      ? 'sidebarClose 0.25s ease'
      : 'sidebarOpen 0.25s ease';
    setTimeout(
      () => {
        sidebar.classList.toggle('active');
        body.classList.toggle('scroll-bar-off');
      },
      sidebar.classList.contains('active') ? 250 : 0,
    );
  }
}