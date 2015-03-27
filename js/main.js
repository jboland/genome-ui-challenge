var bindEvents = function() {
	smoothScroll.init();

	document.querySelector('.mobile-menu-toggle').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('nav-list').classList.toggle('show');
	});

	var nav_links = document.querySelectorAll('nav ul li');

	for (var i = 0; i < nav_links.length; i++) {
		nav_links[i].addEventListener('click', function(event) { 
			var other_active = document.querySelector('.active');
			if (other_active && other_active != this) {
				other_active.classList.toggle('active');
			}
			this.classList.toggle('active');
			if (window.innerWidth < 600) {
				document.getElementById('nav-list').classList.toggle('show');
			}
		});
	}

}

window.onload = function() {
	bindEvents();
}