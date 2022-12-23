(function (jQuery) {
  var jQueryScript = document.createElement("script");
  jQueryScript.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"
  );
  document.head.appendChild(jQueryScript);
  ("use strict");
  /*---------------------------------------------------------------------
    Page Loader
    -----------------------------------------------------------------------*/
  // jQuery("#load").delay(500).fadeOut(500);
  jQuery("#loading").delay(500).fadeOut(500);
  /*---------------------------------------------------------------------
    Page Menu
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    jQuery(document).on("click", ".wrapper-menu", function () {
      jQuery(this).toggleClass("open");
      jQuery("body").toggleClass("sidebar-main");
    });
  });
  /*---------------------------------------------------------------------
    Tooltip
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    jQuery('[data-toggle="popover"]').popover();
    jQuery('[data-toggle="tooltip"]').tooltip();
  });
  /*---------------------------------------------------------------------
    Search input
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    jQuery(document).on("click", function (e) {
      let myTargetElement = e.target;
      let selector, mainElement;
      if (
        jQuery(myTargetElement).hasClass("search-toggle") ||
        jQuery(myTargetElement).parent().hasClass("search-toggle") ||
        jQuery(myTargetElement).parent().parent().hasClass("search-toggle")
      ) {
        if (jQuery(myTargetElement).hasClass("search-toggle")) {
          selector = jQuery(myTargetElement).parent();
          mainElement = jQuery(myTargetElement);
        } else if (jQuery(myTargetElement).parent().hasClass("search-toggle")) {
          selector = jQuery(myTargetElement).parent().parent();
          mainElement = jQuery(myTargetElement).parent();
        } else if (
          jQuery(myTargetElement).parent().parent().hasClass("search-toggle")
        ) {
          selector = jQuery(myTargetElement).parent().parent().parent();
          mainElement = jQuery(myTargetElement).parent().parent();
        }
        if (
          !mainElement.hasClass("active") &&
          jQuery(".navbar-list li").find(".active")
        ) {
          jQuery(".navbar-list li").removeClass("iq-show");
          jQuery(".navbar-list li .search-toggle").removeClass("active");
        }
        selector.toggleClass("iq-show");
        mainElement.toggleClass("active");
        e.preventDefault();
      } else if (jQuery(myTargetElement).is(".search-input")) {
      } else {
        jQuery(".navbar-list li").removeClass("iq-show");
        jQuery(".navbar-list li .search-toggle").removeClass("active");
      }
    });
  });
  /*---------------------------------------------------------------------
    Sidebar Widget
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    function checkClass(ele, type, className) {
      switch (type) {
        case "addClass":
          if (!ele.hasClass(className)) {
            ele.addClass(className);
          }
          break;
        case "removeClass":
          if (ele.hasClass(className)) {
            ele.removeClass(className);
          }
          break;
        case "toggleClass":
          ele.toggleClass(className);
          break;
      }
    }
    jQuery(".iq-sidebar-menu .active").each(function (ele, index) {
      jQuery(this).addClass("active");
      jQuery(this).addClass("main-active");
      jQuery(this).find(".iq-submenu").addClass("show");
    });
    jQuery(".iq-sidebar-menu li a").click(function (ele, index) {
      jQuery(".iq-sidebar-menu li a")
        .parent()
        .removeClass("active")
        .removeClass("main-active");
      jQuery(this).parent().toggleClass("active");
    });
    jQuery(".iq-sidebar-menu li.menu-level a").click(function (ele, index) {
      jQuery(this).parent().addClass("main-active");
    });
    jQuery(".iq-sidebar-menu li.menu-level li a").click(function (ele, index) {
      jQuery(".iq-sidebar-menu li.menu-level").addClass("main-active");
      jQuery(this).parent().toggleClass("active");
    });
  });
  /*---------------------------------------------------------------------
    Sidebar Widget
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    jQuery().on("click", ".todo-task-lists li", function () {
      if (jQuery(this).find("input:checkbox[name=todo-check]").is(":checked")) {
        jQuery(this)
          .find("input:checkbox[name=todo-check]")
          .attr("checked", false);
        jQuery(this).removeClass("active-task");
      } else {
        jQuery(this)
          .find("input:checkbox[name=todo-check]")
          .attr("checked", true);
        jQuery(this).addClass("active-task");
      }
    });
  });
  /*---------------------------------------------------------------------
    FullScreen
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    jQuery(document).on("click", ".iq-full-screen", function () {
      let elem = jQuery(this);
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement && // Mozilla
        !document.webkitFullscreenElement && // Webkit-Browser
        !document.msFullscreenElement
      ) {
        // MS IE ab version 11
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      elem
        .find("i")
        .toggleClass("ri-fullscreen-line")
        .toggleClass("ri-fullscreen-exit-line");
    });
  });
  /*---------------------------------------------------------------------
    Form Validation
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    (function () {
      window.addEventListener(
        "load",
        function () {
          var forms = document.getElementsByClassName("needs-validation");
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();
  });
  $(document).ready(function () {
    $("input").attr("autocomplete", "nope");
  });
  /*---------------------------------------------------------------------
    Form Upload
    -----------------------------------------------------------------------*/
  jQuery(document).ready(function ($) {
    var inputs = document.querySelectorAll("#fileup");
    Array.prototype.forEach.call(inputs, function (input) {
      var label = input.nextElementSibling,
        labelVal = label.innerHTML;
      input.addEventListener("change", function (e) {
        var fileName = "";
        if (this.files && this.files.length > 1)
          fileName = (this.getAttribute("data-multiple-caption") || "").replace(
            "{count}",
            this.files.length
          );
        else fileName = e.target.value.split("\\").pop();
        if (fileName) label.querySelector("span").innerHTML = fileName;
        else label.innerHTML = labelVal;
      });
      // Firefox bug fix
      input.addEventListener("focus", function () {
        input.classList.add("has-focus");
      });
      input.addEventListener("blur", function () {
        input.classList.remove("has-focus");
      });
    });
  });
  /*---------------------------------------------------------------------
    Date Range Picker
    -----------------------------------------------------------------------*/
  //   jQuery(document).ready(function ($) {
  //     $(function () {
  //       $(".reportrange").attr("placeholder", "MM/DD/YYYY");
  //       var start = moment();
  //       var end = moment().add(30, "days");

  //       function cb(start, end) {
  //         $(".reportrange").html(
  //           start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
  //         );
  //       }
  //       $(".reportrange").on("apply.daterangepicker", function (ev, picker) {
  //         $(this).val(
  //           picker.startDate.format("MM/DD/YYYY") +
  //             " - " +
  //             picker.endDate.format("MM/DD/YYYY")
  //         );
  //       });
  //       $(".reportrange").daterangepicker(
  //         {
  //           startDate: start,
  //           endDate: end,
  //           autoUpdateInput: false,
  //           ranges: {
  //             "Last 7 Days": [moment().subtract(6, "days"), moment()],
  //             "Last 30 Days": [moment().subtract(29, "days"), moment()],
  //             "This Month": [moment().startOf("month"), moment().endOf("month")],
  //             "Last Month": [
  //               moment().subtract(1, "month").startOf("month"),
  //               moment().subtract(1, "month").endOf("month"),
  //             ],
  //           },
  //         },
  //         cb
  //       );
  //       cb(start, end);
  //     });
  //   });
  /*---------------------------------------------------------------------
    Switch
    -----------------------------------------------------------------------*/
  $(".active-switch input").click(function (e) {
    if ($(this).prop("checked") == true) {
      $(".active-switch label").text("Active");
    } else if ($(this).prop("checked") == false) {
      $(".active-switch label").text("In-active");
    }
  });
  $(".gender-switch input").click(function (e) {
    if ($(this).prop("checked") == true) {
      $(".gender-switch label").text("Male");
    } else if ($(this).prop("checked") == false) {
      $(".gender-switch label").text("Female");
    }
  });
  $(".app-switch input").click(function (e) {
    if ($(this).prop("checked") == true) {
      $(".app-switch label").text("Billable");
    } else if ($(this).prop("checked") == false) {
      $(".app-switch label").text("Non-Billable");
    }
  });
  $(".daily-switch input").click(function (e) {
    if ($(this).prop("checked") == true) {
      $(".daily-switch label").text("Daily");
    } else if ($(this).prop("checked") == false) {
      $(".daily-switch label").text("Weekly");
    }
  });
  $(".dashboard-card").parent().addClass("mb-4");
})(jQuery);


function readurl(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#ImagePreview').css('background-image', 'url('+e.target.result +')');
          $('#ImagePreview').hide();
          $('#ImagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#ImageUpload").change(function() {
  readurl(this);
});





function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#image-preview').attr('src', e.target.result);
      $('#image-preview').hide();
      $('#image-preview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#file-input").change(function() {
  readURL(this);
});
