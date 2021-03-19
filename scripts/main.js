/*
 * main.js
 */

/* put the event handlers after the DOM is loaded */
function init() {
	document.getElementById('dark').addEventListener('click', function () { themeChooser('dark'); });
	document.getElementById('light').addEventListener('click', function () { themeChooser('light'); });
}

/* boilerplate GET request */
function themeChooser(theme) {
	switch (theme) {
		case 'dark':
			applyTheme('snow', '#404040');
			break;
		case 'light':
			applyTheme('black', 'lavenderblush');
			break;
		default:
			console.log(`Invalid theme: ${theme}`);
	}
}

function applyTheme(tc, bc) {
	var r = document.querySelector(':root');
	r.style.setProperty('--textcolor', tc);
	r.style.setProperty('--backgroundcolor', bc);
}

/* wait until the DOM is loaded before we can do any of this */
window.addEventListener('DOMContentLoaded', init);