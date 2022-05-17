
const $burger = document.querySelector('.burger'),
	$nav = document.querySelector('.nav'),
	$body = document.querySelector('body'),
	$navItems = document.querySelectorAll('.nav__item'),
	$navDropdown = document.querySelectorAll('.nav-dropdown')

$burger.addEventListener('click', () => {

	$burger.classList.toggle('burger--active');// из иконки меню сделать крестик
	$nav.classList.toggle('nav--active');// появление меню
	$body.classList.toggle('stop-scroll');// скрыть прокрутку сайта в меню

	// if(!$burger.classList.contains('burger--active')){
	// 	$navItems.classList.remove('nav--open');
	// }
});


//закрыьть меню при клике на любой пункт меню
//удаляем все ранее присвоенные классы для открытия меню
$navDropdown.forEach(el => {
	el.addEventListener('click', () => {
		$burger.classList.remove('burger--active');
		// $navItems.classList.remove('nav--active');
		$body.classList.remove('stop-scroll');
	})
});




