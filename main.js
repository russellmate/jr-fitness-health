{
	// Mobile menu
	const toggle = document.querySelector('.menu-toggle');
	const nav = document.getElementById('site-nav');

	const setMenu = open => {
		nav.classList.toggle('open', open);
		toggle.setAttribute('aria-expanded', String(open));
		toggle.textContent = open ? 'Close' : 'Menu';
	};

	toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
	nav.addEventListener('click', e => {
		if (e.target.closest('a')) setMenu(false);
	});
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && nav.classList.contains('open')) {
			setMenu(false);
			toggle.focus();
		}
	});

	// Enquiry form: sends to Netlify Forms without leaving the page.
	// Without JavaScript the form still posts normally and lands on thanks.html.
	const form = document.querySelector('.enquiry-form');
	const status = form.querySelector('.form-status');
	const button = form.querySelector('button[type=submit]');

	const showSent = () => {
		form.innerHTML =
			'<div class="sent"><h3>Enquiry sent</h3>' +
			'<p>Thanks. Joe will be in touch soon to arrange a chat. Keep an eye on your inbox, including the junk folder.</p></div>';
		form.setAttribute('tabindex', '-1');
		form.focus();
	};

	form.addEventListener('submit', async e => {
		e.preventDefault();
		if (!form.reportValidity()) return;

		// Preview copies of the page (not on Netlify) can't send anything.
		if (document.documentElement.hasAttribute('data-preview')) {
			status.classList.remove('error');
			status.textContent = 'This is a preview. On the live site, this sends your enquiry to Joe.';
			return;
		}

		button.disabled = true;
		button.textContent = 'Sending…';
		status.textContent = '';
		status.classList.remove('error');

		try {
			const res = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(new FormData(form)).toString(),
			});
			if (!res.ok) throw new Error(res.status);
			showSent();
		} catch {
			button.disabled = false;
			button.textContent = 'Send enquiry';
			status.classList.add('error');
			status.textContent =
				'Your enquiry didn’t send. Check your connection and try again, or message Joe on Instagram.';
		}
	});
}
