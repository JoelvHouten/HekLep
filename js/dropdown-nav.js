const toggleBtn = document.querySelector('#menu-icon')
const toggleBtnIcon = document.querySelector('.bx-menu')
const dropDownMenu = document.querySelector('.dropdown_navlist')

toggleBtn.onclick = function (){
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')
		
	toggleBtnIcon.classList = isOpen
	? 'bx bx-x'
	: 'bx bx-menu'
}