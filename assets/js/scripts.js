(function() {
  $(".js-menu-toggle").on("click", function(event) {
    return $(this).closest(".js-menu-container").toggleClass("open");
  });

  $(".share-button").on("click", function(event) {
    $(this).closest(".menu-wrapper").toggleClass("open");
    return event.stopPropagation();
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
    $('.js-em').attr("href", "mailto:" + (emd.join("")));
    if ($(".not-found-page").length) {
      return $(".not-found-page").css('background-image', "url(\"/" + window.gifs[Math.floor(Math.random() * (window.gifs.length + 1))].location + "\")");
    }
  });

  $(".js-ga-event-tracking").on("click", function() {
    var gaevent;
    gaevent = {
      'hitType': 'event'
    };
    gaevent['eventCategory'] = $(this).data("ga-category");
    gaevent['eventAction'] = $(this).data("ga-action");
    gaevent['eventLabel'] = $(this).data("ga-label");
    gaevent['eventValue'] = $(this).data("ga-value");
    if (!(gaevent['eventCategory'] === null || gaevent['eventAction'] === null)) {
      return ga('send', gaevent);
    }
  });

}).call(this);
