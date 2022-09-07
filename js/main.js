let header = document.querySelector('header');
let oldScroll = 0;
window.onscroll = (e) => {
  currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.style.background = 'transparent';
  } else {
    header.style.background = '#010016';
  }
	if (oldScroll < currentScroll) {
		header.style.position = 'static';
		// nav.style.display = 'none';
  } else if (oldScroll > currentScroll) {
		header.style.position = 'fixed';
  }
	// if (nav.style.display == 'none') {
	// 	document.querySelector('header .toggle-icon').classList.remove('open');
	// } else {
	// 	document.querySelector('header .toggle-icon').classList.add('open');
	// }
  oldScroll = currentScroll;
}


