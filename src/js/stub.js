export function stub() {
  const btns = document.querySelectorAll('.stub');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('В РАЗРАБОТКЕ')
    })
  });
}
