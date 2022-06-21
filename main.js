// hamburger menu/mobile nav
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const main = document.querySelector('main');
const header = document.querySelector('header');
const navItem = document.querySelectorAll('.nav-item');
const html = document.querySelector('html');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		mobileNav.classList.add('open');
		html.style.overflow = 'hidden';
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		mobileNav.classList.remove('open');
		html.style.overflow = 'auto';
		html.style.overflowX = 'hidden';
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
			document.body.scrollIntoView();
			modalOpen = true;
		} else {
			planModal.classList.remove('open');
			modalOpen = false;
		}

		if (menuOpen) {
			planModal.classList.add('open');
			menuBtn.classList.remove('open');
			mobileNav.classList.remove('open');
			html.style.overflow = 'auto';
			menuOpen = false;
			modalOpen = true;
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
