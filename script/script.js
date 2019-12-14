$(function() {
  //add BT DD show event
//   $(".dropdown").on("show.bs.dropdown", function() {
//     var $btnDropDown = $(this).find(".dropdown-toggle");
//     var $listHolder = $(this).find(".dropdown-menu");
//     //reset position property for DD container
//     $(this).css("position", "absolute");
//     $listHolder.css({
//       top: $btnDropDown.offset().top + $btnDropDown.outerHeight(true) + "px",
//       left: $btnDropDown.offset().left + "px"
//     });
//     $listHolder.data("open", true);
//   });
//   //add BT DD hide event
//   $(".dropdown").on("hidden.bs.dropdown", function() {
//     var $listHolder = $(this).find(".dropdown-menu");
//     $listHolder.data("open", false);
//   });
  //add on scroll for table holder
    //   $(".ak-holder").scroll(function() {
    //     var $ddHolder = $(this).find(".dropdown")
    //     var $btnDropDown = $(this).find(".dropdown-toggle");
    //     var $listHolder = $(this).find(".dropdown-menu");
    //     if ($listHolder.data("open")) {
    //       $listHolder.css({
    //         "top": ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
    //         "left": $btnDropDown.offset().left + "px"
    //       });
    //       $ddHolder.toggleClass("open", ($btnDropDown.offset().left > $(this).offset().left))
    //     }
    //   })


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