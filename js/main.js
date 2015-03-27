var bindEvents = function() {
	smoothScroll.init();

	document.querySelector('.mobile-menu-toggle').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('nav-list').classList.toggle('show');
	});

}

window.onload = function() {
	bindEvents();
}