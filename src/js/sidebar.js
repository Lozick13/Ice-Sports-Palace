export default function sidebar (){
	const sidebarBtn = document.querySelector('#sidebar-open')
	const sidebar = document.querySelector('.sidebar')

	sidebarBtn.addEventListener('click', () => {
		sidebar.classList.toggle('active')
	})
}
