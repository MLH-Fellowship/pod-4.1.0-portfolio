var darkSwitch = document.getElementById('dark-theme-toggle');
window.addEventListener('load', function () {
  initTheme();

  if (darkSwitch !== null) {
    darkSwitch.addEventListener('change', function () {
      resetTheme();
    });
  }
});

/**
 * Adds or removes the attribute 'data-theme' depending on whether
 * the switch is 'on' or 'off'.
 */
function initTheme() {
  var darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';

  if (darkSwitch !== null) darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute('data-theme', 'dark')
    : document.body.removeAttribute('data-theme');
}

/**
 * Checks if the switch is 'on' or 'off'; if it is toggled,
 * it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkSwitch');
  }
}
