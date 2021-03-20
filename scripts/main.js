/*
 * main.js
 */

/* put the event handlers after the DOM is loaded and set the stored theme*/
function init() {
	document.getElementById('dark').addEventListener('click', function () { themeChooser('dark'); });
	document.getElementById('light').addEventListener('click', function () { themeChooser('light'); });
	document.getElementById('muthur').addEventListener('click', function () { themeChooser('muthur'); });
	document.getElementById('aurebesh').addEventListener('click', function () { themeChooser('aurebesh'); });
	if (localStorage.getItem('theme') == null) {
		localStorage.setItem('theme', 'dark');
	}
	themeChooser(localStorage.getItem('theme'))
}

/* Based on the what the theme is, pass in parameters to master function */
function themeChooser(theme) {
	switch (theme) {
		case 'dark':
			applyTheme(theme, 'snow', `"Times New Roman", Times, serif`, '#404040', '#202020', 'solid black', 'snow', 'rebeccapurple', '2px solid indigo', 'indianred', 'darkred', `"Brush Script MT", cursive`, `muthur, monospace`);
			break;
		case 'light':
			applyTheme(theme, 'black', `"Times New Roman", Times, serif`, 'lavenderblush', '#202020', 'solid black', 'snow', 'rebeccapurple', '2px solid indigo', 'indianred', 'darkred', `"Brush Script MT", cursive`, `muthur, monospace`);
			break;
		case 'muthur':
			applyTheme(theme, '#12b853', `muthur, monospace`, 'black', 'black', 'solid black', '#12b853', 'black', '2px solid black', 'black', 'black', `muthur, monospace`, `muthur, monospace`);
			break;
		case 'aurebesh':
			applyTheme(theme, 'gold', `aurebesh, serif`, 'black', 'gold', 'solid black', 'black', 'deepskyblue', '2px solid blue', 'indianred', 'darkred', `aurebesh, cursive`, `aurebesh, monospace`);
			break;
		default:
			console.log(`Invalid theme: ${theme}`);
	}
}

/* Master function which changes all the css vars based on the theme */
function applyTheme(id, txCo, txFo, baCo, heBa, heBo, heCo, buCo, buBo, hoBa, hoBo, faFo, teFo) {
	//update local storage, hide the button and tell user what theme is equiped
	document.getElementById(localStorage.getItem('theme')).removeAttribute('style');
	localStorage.setItem('theme', id);
	document.getElementById(id).setAttribute('style', 'display: none');
	document.getElementById('themeBtn').innerHTML = `THEME: ${document.getElementById(id).innerHTML}`;
	//update the page with the theme
	let cssVars = ['--textcolor', '--textfont', '--backgroundcolor', '--headerbackground', '--headerborder', '--headercolor', '--buttoncolor', '--buttonborder', '--hoverbackground', '--hoverborder', '--fancyfont', '--terminalfont'];
	let inputs = [txCo, txFo, baCo, heBa, heBo, heCo, buCo, buBo, hoBa, hoBo, faFo, teFo]
	let r = document.querySelector(':root');
	let i;
	for (i = 0; i < cssVars.length; i++) {
		r.style.setProperty(cssVars[i], inputs[i]);
	}
}

/* wait until the DOM is loaded before we can do any of this */
window.addEventListener('DOMContentLoaded', init);