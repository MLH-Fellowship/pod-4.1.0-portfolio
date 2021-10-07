
var btn = $('#scroll-button');
var chevronbtn = $(".chevrons");

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

btn.on('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

