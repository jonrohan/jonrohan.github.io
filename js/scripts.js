(function() {
  $(".share-button").on("click", function() {
    $(this).closest(".menu-wrapper").toggleClass("open");
    return false;
  });

  $(document).on("click", function() {
    return $(".menu-wrapper.open").toggleClass("open");
  });

  $(".logo-head a").on("click", function() {
    return $(this).addClass("clicked");
  });

  $(document).ready(function() {
    var emd;
    emd = ["j", "on", "@", "jonr", "ohan", ".me"];
    return $('.js-em').attr("href", "mailto:" + (emd.join("")));
  });

}).call(this);
