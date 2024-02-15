export function sidebarSwitch() {
  const sidebar = document.querySelector('.sidebar');
  const body = document.querySelector('body');
  const sidebarBtnOpen = document.querySelector('#sidebar-open');
  const sidebarBtnClose = document.querySelector('#sidebar-close');

  sidebarBtnOpen.addEventListener('click', () => {
    toggleSidebar();
  });
  sidebarBtnClose.addEventListener('click', () => {
    toggleSidebar();
  });

  function toggleSidebar() {
    sidebar.classList.toggle('active');
    body.classList.toggle('scroll-bar-off');
  }
}
