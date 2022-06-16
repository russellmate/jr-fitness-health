// hamburger menu/mobile nav
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const main = document.querySelector('main');
const navItem = document.querySelectorAll('.nav-item');
const header = document.querySelector('header');
const html = document.querySelector('html');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		mobileNav.classList.add('open');
		main.classList.add('open');
		html.style.overflow = 'hidden';
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		mobileNav.classList.remove('open');
		main.classList.remove('open');
		html.style.overflow = 'auto';
		menuOpen = false;
	}
});

navItem.forEach(item =>
	item.addEventListener('click', () => {
		menuBtn.classList.remove('open');
		mobileNav.classList.remove('open');
		main.classList.remove('open');
		html.style.overflow = 'auto';
		menuOpen = false;
	})
);

// sign up modal
const selectPlan = document.querySelectorAll('.select-plan');
const planModal = document.querySelector('.sign-up-modal');

let modalOpen = false;

selectPlan.forEach(item =>
	item.addEventListener('click', () => {
		if (!modalOpen) {
			planModal.classList.add('open');
			main.classList.add('open');
			header.classList.add('open');
			modalOpen = true;
		} else {
			planModal.classList.remove('open');
			main.classList.remove('open');
			header.classList.remove('open');
			modalOpen = false;
		}
	})
);

const exit = document.querySelector('.exit');

exit.addEventListener('click', () => {
	if (modalOpen) {
		planModal.classList.remove('open');
		main.classList.remove('open');
		header.classList.remove('open');
		modalOpen = true;
	}
});
