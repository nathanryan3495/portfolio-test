$(function homeButton() {
	$(".nav-button-home").click(function(){
	$('html, body').animate({
    scrollTop: $("div.page-home").offset().top
  }, 1000)
});
})

$(function workButton() {
	$(".nav-button-work").click(function(){
	$('html, body').animate({
    scrollTop: $("div.page-work").offset().top
  }, 1000)
});
})

$(function workButton() {
	$(".nav-button-about").click(function(){
	$('html, body').animate({
    scrollTop: $("div.page-about").offset().top
  }, 1000)
});
})

$(function menuButton() {
	$(".menu-button").click(function(){
	$('.nav-bar').toggleClass("nav-bar-shown")
});
})
