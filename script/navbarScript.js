$(function() {
    $(".dropdown").on("show.bs.dropdown", function() {
      $(".overflowHidden").append(
        $(".dropdown-menu")
          .css({
            position: "absolute",
            left: $(".dropdown").offset().left,
            top: $(".dropdown").offset().top + 61
          })
          .detach()
      );
    });

    $(".dropdown").on("hidden.bs.dropdown", function() {
      $(".overflowHidden").append(
        $(".dropdown-menu")
          .css({
            position: false,
            left: false,
            top: false
          })
          .detach()
      );
    });
});

