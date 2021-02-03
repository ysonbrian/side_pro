const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const dark = document.getElementById('dark');
const body = document.querySelector('body');
const content = document.querySelector('.content');

open.addEventListener('click', () => {
	container.classList.add('show-nav');
});

close.addEventListener('click', () => {
	container.classList.remove('show-nav');
});

dark.addEventListener('click', (e) => {
	if (dark.children[0] === e.target) {
		darkColor();
	} else {
		whiteColor();
	}
});

function darkColor() {
	dark.children[0].classList.toggle('hidden');
	dark.children[1].classList.toggle('hidden');
	body.style.backgroundColor = 'black';
	container.style.backgroundColor = 'black';
	content.childNodes.forEach((child, i) => {
		if (i % 2 !== 0) {
			child.style.color = 'white';
		}
	});
}

function whiteColor() {
	dark.children[0].classList.toggle('hidden');
	dark.children[1].classList.toggle('hidden');
	body.style.backgroundColor = '#333';
	container.style.backgroundColor = '#fff';
	content.childNodes.forEach((child, i) => {
		if (i % 2 !== 0) {
			child.style.color = '#222';
		}
	});
}
