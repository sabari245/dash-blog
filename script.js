$(function () {
  function fit() {
    var h = $(window).height();
    $("#cover-image").height(h);
    $("#maindiv").height(h);
  }
  fit();
  $(window).resize(fit);
});
