
// scroll button behavior
var btn = $('#scroll-button');
var chevronbtn = $(".chevrons");

// hide button when not in bottom part
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    chevronbtn.addClass('show');
  } else {
    chevronbtn.removeClass('show');
  }
});

// defined click function behaviour
btn.on('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

