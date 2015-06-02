(function() {
  var hideModal;

  $(document).ready(function() {
    if ($(".not-found-page").length) {
      return $(".not-found-page").css('background-image', "url(\"/" + window.gifs[Math.floor(Math.random() * (window.gifs.length + 1))].location + "\")");
    }
  });

  $(document).ready(function() {
    anchors.options = {
      placement: 'left',
      icon: '#'
    };
    return anchors.add('.markdown-body h1, .markdown-body h2, .markdown-body h3,' + ' .markdown-body h4, .markdown-body h5, .markdown-body h6');
  });

  $(".share-button").on("click", function(event) {
    $(this).closest(".menu-wrapper").toggleClass("open");
    return event.stopPropagation();
  });

  $(document).on("click", function() {
    return $(".menu-wrapper.open").toggleClass("open");
  });

  $(document).ready(function() {
    var emd;
    emd = ["j", "on", "@", "jonr", "ohan", ".me"];
    return $('.js-em').attr("href", "mailto:" + (emd.join("")));
  });

  $(document).on("click", ".js-ga-event-tracking", function() {
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

  $(".js-menu-toggle").on("click", function(event) {
    return $(this).closest(".js-menu-container").toggleClass("open");
  });

  $(".logo-head a").on("click", function() {
    return $(this).addClass("clicked");
  });

  hideModal = function() {
    $('.js-image-modal').addClass('hidden');
    return $('.js-image-window').empty();
  };

  $(document).on('click, keyup', function(event) {
    if (event.keyCode === 27) {
      return hideModal();
    }
  });

  $(document).on('click', '.js-image-modal', function() {
    return hideModal();
  });

  $(document).on('click', '.js-zoom-image', function() {
    var img;
    img = $("<img src='" + ($(this).attr('src')) + "'>");
    $('.js-image-window').empty().append(img);
    return $('.js-image-modal').toggleClass('hidden');
  });

}).call(this);
