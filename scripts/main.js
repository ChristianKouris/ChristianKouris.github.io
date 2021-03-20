/*
 * main.js
 */

/* put the event handlers after the DOM is loaded and set the stored theme*/
function init() {
	document.getElementById('dark').addEventListener('click', function () { themeChooser('dark'); });
	document.getElementById('light').addEventListener('click', function () { themeChooser('light'); });
	if (localStorage.getItem('theme') == null) {
		localStorage.setItem('theme', 'dark');
	}
	themeChooser(localStorage.getItem('theme'))
}

/* Based on the what the theme is, pass in parameters to master function */
function themeChooser(theme) {
	switch (theme) {
		case 'dark':
			applyTheme(theme, 'snow', '#404040');
			break;
		case 'light':
			applyTheme(theme, 'black', 'lavenderblush');
			break;
		default:
			console.log(`Invalid theme: ${theme}`);
	}
}

/* Master function which changes all the css vars based on the theme */
function applyTheme(id, tc, bc) {
	//update local storage, hide the button and tell user what theme is equiped
	document.getElementById(localStorage.getItem('theme')).removeAttribute('style');
	localStorage.setItem('theme', id);
	document.getElementById(id).setAttribute('style', 'display: none');
	document.getElementById('themeBtn').innerHTML = `THEME: ${document.getElementById(id).innerHTML}`;
	//update the page with the theme
	let r = document.querySelector(':root');
	r.style.setProperty('--textcolor', tc);
	r.style.setProperty('--backgroundcolor', bc);
}

/* wait until the DOM is loaded before we can do any of this */
window.addEventListener('DOMContentLoaded', init);