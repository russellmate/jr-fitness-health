// hamburger menu/mobile nav
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const main = document.querySelector('main');
const header = document.querySelector('header');
const navItem = document.querySelectorAll('.nav-item');
const html = document.querySelector('html');
const desktopNav = document.querySelector('desktop-nav');

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
			main.classList.add('open');
			document.body.scrollIntoView();
			modalOpen = true;
		} else {
			planModal.classList.remove('open');
			main.classList.remove('open');
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

// header scroll
const logo = document.querySelector('.title');

window.onscroll = function () {
	scrollFunction();
};
if (window.innerWidth < 750) {
	function scrollFunction() {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			header.style.height = '7rem';
			main.style.marginTop = '7rem';
			logo.style.width = '7rem';
		} else {
			header.style.height = '12rem';
			main.style.marginTop = '11rem';
			logo.style.width = '12rem';
		}
	}
} else {
	function scrollFunction() {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			header.style.height = '8rem';
			main.style.marginTop = '8rem';
			logo.style.width = '7rem';
		} else {
			header.style.height = '19rem';
			main.style.marginTop = '19rem';
			logo.style.width = '15rem';
		}
	}
}

// email contact form
function sendEmail() {
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'russelldnb@gmail.com',
		Password: 'Mancala44',
		To: 'russelldnb@gmail.com',
		From: document.getElementById('contact-email').value,
		Subject: 'Client contact request',
		Body:
			'Name: ' +
			document.getElementById('name').value +
			'<br> Email: ' +
			document.getElementById('contact-email').value +
			'<br> Mobile: ' +
			document.getElementById('contact-mobile').value +
			'<br> Message: ' +
			document.getElementById('contact-reason').value +
			'<br> Preferred method: ' +
			document.getElementById('contact-option').value +
			'<br> Best time to call: ' +
			document.getElementById('time').value,
	}).then(message => alert('Form submitted. Thank you for your enquiry.'));
}
